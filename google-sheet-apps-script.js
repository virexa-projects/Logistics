/**
 * Google Apps Script for Frisbi Logistics Google Sheet Web App
 * 
 * Deployment URL:
 * https://script.google.com/macros/s/AKfycbze9DM1_lUgyOJ1-JQuIfjfU8rXHfA-yUs8xeSu0Sqh05fi-YzaxBEH7Tzy8l_hpSgmHw/exec
 * 
 * Instructions:
 * 1. Open your Google Spreadsheet:
 *    - Rate Calculator Tab: "RateCalculator" (or "RateCalculaterNew")
 *    - Booking Tab: "Bookings" (or "Sheet1")
 *    - Contact Us Tab: "ContactUs" (or "Sheet2")
 * 2. Go to Extensions > Apps Script
 * 3. Paste this entire file into Code.gs
 * 4. Run initialSetup() once if you want to bind the document ID
 * 5. (Optional) Run reorganizeExistingSheetHeaders() to automatically reorder any existing columns in your sheets!
 * 6. Click Deploy > Manage Deployments > Edit (pencil) > New version > Deploy
 */

var scriptProp = PropertiesService.getScriptProperties();

function initialSetup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty("key", ss.getId());
}

// 🎯 CANONICAL COLUMN ORDERS
// Ensures dimensions (length, height, weight, width) and key fields are grouped neatly together
var PREFERRED_HEADERS = {
  RateCalculator: [
    "type",
    "status",
    "service",
    "luggageType",
    "length",
    "height",
    "weight",
    "width",
    "totalPrice",
    "Rate Calculator Amount",
    "Rate Calculator Used At",
    "pickupName",
    "pickupPhone",
    "pickupPincode",
    "pickupCity",
    "pickupState",
    "pickupAddress",
    "name",
    "phone",
    "dropPincode",
    "dropCity",
    "dropState",
    "dropAddress",
    "address"
  ],
  Bookings: [
    "type",
    "status",
    "orderId",
    "paymentId",
    "paymentStatus",
    "awb",
    "courier",
    "service",
    "luggageType",
    "length",
    "height",
    "weight",
    "width",
    "totalPrice",
    "Rate Calculator Amount",
    "Rate Calculator Used At",
    "pickupName",
    "pickupPhone",
    "pickupPincode",
    "pickupCity",
    "pickupState",
    "pickupAddress",
    "name",
    "phone",
    "email",
    "dropPincode",
    "dropCity",
    "dropState",
    "dropAddress",
    "address",
    "customerType",
    "addons",
    "includeGST"
  ],
  ContactUs: [
    "Date",
    "name",
    "phone",
    "email",
    "pickupCity",
    "dropCity",
    "service",
    "message",
    "source"
  ]
};

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

    // ✅ Meaningful Sheet Name Resolver
    var rawSheetName = data.sheetName || "Bookings";
    var sheetMap = {
      "sheet1": "Bookings",
      "sheet2": "ContactUs",
      "sheet3": "RateCalculator",
      "ratecalculaternew": "RateCalculator",
      "ratecalculatornew": "RateCalculator"
    };

    var lowerKey = rawSheetName.toString().trim().toLowerCase();
    var sheetName = sheetMap[lowerKey] || rawSheetName;

    var docId = scriptProp.getProperty("key");
    var doc = docId ? SpreadsheetApp.openById(docId) : SpreadsheetApp.getActiveSpreadsheet();
    
    var sheet = doc.getSheetByName(sheetName) || doc.getSheetByName(rawSheetName);

    if (!sheet) {
      sheet = doc.insertSheet(sheetName);
    }

    // 1️⃣ Read current headers in Row 1
    var lastCol = sheet.getLastColumn();
    var headers = lastCol > 0 ? sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(function (h) {
      return h.toString().trim();
    }) : [];

    // If new sheet or completely empty, populate with predefined canonical headers
    var canonical = PREFERRED_HEADERS[sheetName] || [];
    if (headers.length === 0 && canonical.length > 0) {
      headers = canonical.slice();
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }

    // 2️⃣ Check for any missing columns from incoming data
    var ignoreKeys = ["sheetName"];
    var aliasMap = {
      "ratecalculatoramount": "Rate Calculator Amount",
      "ratecalculatorusedat": "Rate Calculator Used At",
      "usertype": "User Type",
      "companyname": "Company Name",
      "gstnumber": "GST Number"
    };

    Object.keys(data).forEach(function (rawKey) {
      var key = rawKey.trim();
      if (!key || ignoreKeys.indexOf(key) !== -1) return;

      var keyLower = key.toLowerCase().replace(/[\s_-]+/g, "");
      var exists = headers.some(function (h) {
        var hLower = h.toLowerCase().replace(/[\s_-]+/g, "");
        return hLower === keyLower;
      });

      if (!exists) {
        var colTitle = aliasMap[keyLower] || key;
        headers.push(colTitle);
        sheet.getRange(1, headers.length).setValue(colTitle);
      }
    });

    // 3️⃣ Design the column headers: Bold font, slate background, freeze top row
    if (headers.length > 0) {
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange
        .setFontWeight("bold")
        .setFontColor("#0F172A")
        .setBackground("#F1F5F9")
        .setVerticalAlignment("middle");
      sheet.setRowHeight(1, 35);
      sheet.setFrozenRows(1);
    }

    // 4️⃣ Map data to headers
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
        return k.toLowerCase().replace(/[\s_-]+/g, "") === headerStr.toLowerCase().replace(/[\s_-]+/g, "");
      });

      if (key && data[key] !== undefined && data[key] !== null) {
        return Array.isArray(data[key]) ? data[key].join(", ") : data[key];
      }

      return "";
    });

    // 5️⃣ Append row & commit immediately
    sheet.appendRow(row);
    SpreadsheetApp.flush();

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

/**
 * 🛠️ UTILITY FUNCTION: Reorganize Existing Sheet Columns
 * Run this function directly from Google Apps Script editor to instantly reorder
 * any existing sheet (e.g. RateCalculator or Bookings) so all columns follow the
 * exact length, height, weight, width order without losing any data!
 */
function reorganizeExistingSheetHeaders() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ["RateCalculator", "RateCalculaterNew", "Bookings", "Sheet1"];

  sheets.forEach(function (sheetName) {
    var sheet = doc.getSheetByName(sheetName);
    if (!sheet) return;

    var numRows = sheet.getLastRow();
    var numCols = sheet.getLastColumn();
    if (numRows < 1 || numCols < 1) return;

    var allData = sheet.getRange(1, 1, numRows, numCols).getValues();
    var currentHeaders = allData[0].map(function (h) { return h.toString().trim(); });

    // Determine target canonical list
    var canonicalKey = (sheetName.toLowerCase().indexOf("rate") !== -1) ? "RateCalculator" : "Bookings";
    var preferredList = PREFERRED_HEADERS[canonicalKey].slice();

    // Add any existing headers that are not in preferredList to the end
    currentHeaders.forEach(function (h) {
      if (!h) return;
      var hLower = h.toLowerCase().replace(/[\s_-]+/g, "");
      var found = preferredList.some(function (p) {
        return p.toLowerCase().replace(/[\s_-]+/g, "") === hLower;
      });
      if (!found) {
        preferredList.push(h);
      }
    });

    // Filter preferredList to only headers that exist in current sheet
    var finalHeaders = [];
    preferredList.forEach(function (targetH) {
      var targetHLower = targetH.toLowerCase().replace(/[\s_-]+/g, "");
      var existingIndex = currentHeaders.findIndex(function (h) {
        return h.toLowerCase().replace(/[\s_-]+/g, "") === targetHLower;
      });
      if (existingIndex !== -1 && finalHeaders.indexOf(currentHeaders[existingIndex]) === -1) {
        finalHeaders.push(currentHeaders[existingIndex]);
      }
    });

    // Build remapped rows
    var remappedData = [];
    for (var r = 0; r < allData.length; r++) {
      var row = [];
      for (var c = 0; c < finalHeaders.length; c++) {
        if (r === 0) {
          row.push(finalHeaders[c]);
        } else {
          var originalColIdx = currentHeaders.indexOf(finalHeaders[c]);
          row.push(originalColIdx !== -1 ? allData[r][originalColIdx] : "");
        }
      }
      remappedData.push(row);
    }

    // Write back clean data
    sheet.clear();
    sheet.getRange(1, 1, remappedData.length, finalHeaders.length).setValues(remappedData);

    // Apply header formatting
    var headerRange = sheet.getRange(1, 1, 1, finalHeaders.length);
    headerRange
      .setFontWeight("bold")
      .setFontColor("#0F172A")
      .setBackground("#F1F5F9")
      .setVerticalAlignment("middle");
    sheet.setRowHeight(1, 35);
    sheet.setFrozenRows(1);
  });
}
