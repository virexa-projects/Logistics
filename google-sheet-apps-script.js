/**
 * Google Apps Script for Frisbi Logistics Google Sheet Web App
 * 
 * Deployment URL:
 * https://script.google.com/macros/s/AKfycbze9DM1_lUgyOJ1-JQuIfjfU8rXHfA-yUs8xeSu0Sqh05fi-YzaxBEH7Tzy8l_hpSgmHw/exec
 * 
 * Instructions:
 * 1. Open your Google Spreadsheet:
 *    - Rate Calculator Tab: "RateCalculaterNew"
 *    - Booking Tab: "Sheet1"
 *    - Contact Us Tab: "Sheet2"
 * 2. Go to Extensions > Apps Script
 * 3. Paste this entire file into Code.gs
 * 4. Run initialSetup() once if you want to bind the document ID
 * 5. Click Deploy > Manage Deployments > Edit (pencil) > New version > Deploy
 */

var scriptProp = PropertiesService.getScriptProperties();

function initialSetup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty("key", ss.getId());
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var data = {};

    // ✅ Universal parser (JSON or URL-encoded form data)
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    var sheetName = data.sheetName || "Sheet1";

    var docId = scriptProp.getProperty("key");
    var doc = docId ? SpreadsheetApp.openById(docId) : SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(sheetName);

    if (!sheet) {
      sheet = doc.insertSheet(sheetName);
    }

    // 1️⃣ Read current headers in Row 1
    var lastCol = sheet.getLastColumn();
    var headers = lastCol > 0 ? sheet.getRange(1, 1, 1, lastCol).getValues()[0] : [];

    // 2️⃣ Automatically add the 2 new columns to Row 1 if missing
    var newColumns = ["Rate Calculator Amount", "Rate Calculator Used At"];
    newColumns.forEach(function (col) {
      var exists = headers.some(function (h) {
        return h.toString().trim().toLowerCase() === col.toLowerCase();
      });
      if (!exists) {
        headers.push(col);
        sheet.getRange(1, headers.length).setValue(col);
      }
    });

    // 3️⃣ Map data to headers
    var row = headers.map(function (h) {
      var headerStr = h.toString().trim();

      if (headerStr.toLowerCase() === "timestamp" || headerStr.toLowerCase() === "date") {
        return new Date();
      }

      // Exact match
      if (data[headerStr] !== undefined && data[headerStr] !== null && data[headerStr] !== "") {
        return Array.isArray(data[headerStr]) ? data[headerStr].join(", ") : data[headerStr];
      }

      // Fallback aliases for Rate Calculator Amount
      if (headerStr === "Rate Calculator Amount" || headerStr === "rateCalculatorAmount") {
        return data["Rate Calculator Amount"] || data.rateCalculatorAmount || data.totalPrice || "";
      }

      // Fallback aliases for Rate Calculator Used At
      if (headerStr === "Rate Calculator Used At" || headerStr === "rateCalculatorUsedAt") {
        return data["Rate Calculator Used At"] || data.rateCalculatorUsedAt || "";
      }

      // Case-insensitive match fallback
      var key = Object.keys(data).find(function (k) {
        return k.toLowerCase() === headerStr.toLowerCase();
      });

      if (key && data[key] !== undefined && data[key] !== null) {
        return Array.isArray(data[key]) ? data[key].join(", ") : data[key];
      }

      return "";
    });

    // 4️⃣ Append row & commit immediately
    sheet.appendRow(row);
    SpreadsheetApp.flush();

    // ✅ Clean return without invalid .setHeader()
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(
        JSON.stringify({
          result: "error",
          message: err.toString()
        })
      )
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

