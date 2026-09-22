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
 * 5. Run reorganizeExistingSheetHeaders() to automatically reorder RateCalculator to strictly the 14 columns and remove all extra columns!
 * 6. Click Deploy > Manage Deployments > Edit (pencil) > New version > Deploy
 */

var scriptProp = PropertiesService.getScriptProperties();

function initialSetup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty("key", ss.getId());
}

// 🎯 CANONICAL COLUMN ORDERS
// RateCalculator: Strictly maintains ONLY these 14 columns in this exact order
var PREFERRED_HEADERS = {
  RateCalculator: [
    "Pickup PIN code",
    "Drop PIN code",
    "Name",
    "Contact Number",
    "Package Type *",
    "Delivery Speed *",
    "Weight (kg) *",
    "Length (cm) *",
    "Width (cm) *",
    "Height (cm) *",
    "Rate Calculator Used At",
    "totalPrice",
    "Rate Calculator Amount",
    "status"
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

/**
 * Normalizes header or key names by stripping whitespace, asterisks, brackets, and hyphens
 */
function normalizeKey(str) {
  return (str || "").toString().toLowerCase().replace(/[\s*_()-]+/g, "");
}

/**
 * Resolves a field value for a given header from incoming data
 */
function resolveValueForHeader(headerStr, data) {
  var h = headerStr.trim();
  var hl = normalizeKey(h);

  // 1. Direct exact match
  if (data[h] !== undefined && data[h] !== null && data[h] !== "") {
    return Array.isArray(data[h]) ? data[h].join(", ") : data[h];
  }

  // 2. Specific RateCalculator 14-column mappings
  if (hl === "pickuppincode") {
    return data["Pickup PIN code"] || data.pickupPincode || data.pickuppincode || "";
  }
  if (hl === "droppincode") {
    return data["Drop PIN code"] || data.dropPincode || data.droppincode || "";
  }
  if (hl === "name") {
    return data["Name"] || data.pickupName || data.name || "";
  }
  if (hl === "contactnumber") {
    return data["Contact Number"] || data.pickupPhone || data.phone || data.contactNumber || "";
  }
  if (hl === "packagetype") {
    return data["Package Type *"] || data.luggageType || data.packageType || "";
  }
  if (hl === "deliveryspeed") {
    return data["Delivery Speed *"] || data.service || data.deliverySpeed || "";
  }
  if (hl === "weightkg" || hl === "weight") {
    return data["Weight (kg) *"] || data.weight || "";
  }
  if (hl === "lengthcm" || hl === "length") {
    return data["Length (cm) *"] || data.length || "";
  }
  if (hl === "widthcm" || hl === "width") {
    return data["Width (cm) *"] || data.width || "";
  }
  if (hl === "heightcm" || hl === "height") {
    return data["Height (cm) *"] || data.height || "";
  }
  if (hl === "ratecalculatorusedat") {
    return data["Rate Calculator Used At"] || data.rateCalculatorUsedAt || "";
  }
  if (hl === "totalprice") {
    return data["totalPrice"] || data.totalPrice || data.total || "";
  }
  if (hl === "ratecalculatoramount") {
    return data["Rate Calculator Amount"] || data.rateCalculatorAmount || data.totalPrice || data.total || "";
  }
  if (hl === "status") {
    return data["status"] || data.status || "";
  }

  // 3. Fallbacks for Bookings & ContactUs
  if (hl === "timestamp" || hl === "date") {
    return new Date();
  }

  // 4. Case-insensitive & normalized search fallback
  var foundKey = Object.keys(data).find(function (k) {
    return normalizeKey(k) === hl;
  });
  if (foundKey && data[foundKey] !== undefined && data[foundKey] !== null) {
    return Array.isArray(data[foundKey]) ? data[foundKey].join(", ") : data[foundKey];
  }

  return "";
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var data = {};

    // Universal parser (JSON or URL-encoded form data)
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    // Meaningful Sheet Name Resolver
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
    var isRateCalc = (sheetName.toLowerCase().indexOf("rate") !== -1);

    var docId = scriptProp.getProperty("key");
    var doc = docId ? SpreadsheetApp.openById(docId) : SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(sheetName) || doc.getSheetByName(rawSheetName);

    if (!sheet) {
      sheet = doc.insertSheet(sheetName);
    }

    // =========================================================================
    // 🔄 ACTION: UPDATE STATUS (DO NOT INSERT NEW ROW FOR BOOK NOW OR PAYMENT)
    // =========================================================================
    if (data.action === "updateStatus") {
      var targetStatus = data.status || "Book Now Clicked";
      var targetUsedAt = (data["Rate Calculator Used At"] || data.rateCalculatorUsedAt || "").toString().trim();
      var targetPhone = (data["Contact Number"] || data.contactNumber || data.pickupPhone || data.phone || "").toString().trim();

      var lastRow = sheet.getLastRow();
      var lastCol = sheet.getLastColumn();

      if (lastRow > 1 && lastCol > 0) {
        var headersRow = sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(function (h) {
          return h.toString().trim();
        });

        var statusColIdx = headersRow.findIndex(function (h) {
          return normalizeKey(h) === "status";
        });
        var usedAtColIdx = headersRow.findIndex(function (h) {
          return normalizeKey(h) === "ratecalculatorusedat";
        });
        var phoneColIdx = headersRow.findIndex(function (h) {
          var k = normalizeKey(h);
          return k === "contactnumber" || k === "pickupphone" || k === "phone";
        });

        if (statusColIdx !== -1) {
          var allRows = sheet.getRange(2, 1, lastRow - 1, lastCol).getValues();
          var matchedRowIndex = -1;

          // Search bottom-up for the most recent matching record
          for (var i = allRows.length - 1; i >= 0; i--) {
            var rowUsedAt = usedAtColIdx !== -1 ? allRows[i][usedAtColIdx].toString().trim() : "";
            var rowPhone = phoneColIdx !== -1 ? allRows[i][phoneColIdx].toString().trim() : "";

            // 1. Try matching timestamp
            if (targetUsedAt && rowUsedAt && (rowUsedAt === targetUsedAt || targetUsedAt.indexOf(rowUsedAt) !== -1 || rowUsedAt.indexOf(targetUsedAt) !== -1)) {
              matchedRowIndex = i + 2;
              break;
            }
          }

          // 2. If timestamp didn't match, fallback to matching contact phone number from bottom-up
          if (matchedRowIndex === -1 && targetPhone && phoneColIdx !== -1) {
            for (var j = allRows.length - 1; j >= 0; j--) {
              var rPhone = allRows[j][phoneColIdx].toString().trim();
              if (rPhone && (rPhone.indexOf(targetPhone) !== -1 || targetPhone.indexOf(rPhone) !== -1)) {
                matchedRowIndex = j + 2;
                break;
              }
            }
          }

          // Update status in place
          if (matchedRowIndex !== -1) {
            sheet.getRange(matchedRowIndex, statusColIdx + 1).setValue(targetStatus);
            SpreadsheetApp.flush();
            return ContentService
              .createTextOutput(JSON.stringify({ result: "success", action: "updated", row: matchedRowIndex, status: targetStatus }))
              .setMimeType(ContentService.MimeType.JSON);
          }
        }
      }

      // If no matching row was found, do not append duplicate row
      return ContentService
        .createTextOutput(JSON.stringify({ result: "not_found", message: "No matching row found to update" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // =========================================================================
    // 📝 ACTION: INSERT NEW CALCULATION / BOOKING ROW
    // =========================================================================

    // 1️⃣ Read current headers in Row 1
    var lastCol = sheet.getLastColumn();
    var headers = lastCol > 0 ? sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(function (h) {
      return h.toString().trim();
    }) : [];

    // If RateCalculator sheet is empty or has old header schema, enforce canonical 14 headers
    if (isRateCalc) {
      if (headers.length === 0 || normalizeKey(headers[0]) !== "pickuppincode") {
        headers = PREFERRED_HEADERS.RateCalculator.slice();
        sheet.clear();
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      }
    } else {
      // For Bookings or ContactUs, initialize if empty
      var canonical = PREFERRED_HEADERS[sheetName] || [];
      if (headers.length === 0 && canonical.length > 0) {
        headers = canonical.slice();
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      }
    }

    // 2️⃣ Check for missing columns:
    // ⚠️ FOR RateCalculator: NEVER ADD EXTRA COLUMNS! Only maintain the 14 columns.
    if (!isRateCalc) {
      var ignoreKeys = ["sheetName", "action"];
      Object.keys(data).forEach(function (rawKey) {
        var key = rawKey.trim();
        if (!key || ignoreKeys.indexOf(key) !== -1) return;

        var keyNorm = normalizeKey(key);
        var exists = headers.some(function (h) {
          return normalizeKey(h) === keyNorm;
        });

        if (!exists) {
          headers.push(key);
          sheet.getRange(1, headers.length).setValue(key);
        }
      });
    }

    // 3️⃣ Header formatting: Bold font, slate background, freeze top row
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

    // 4️⃣ Map data to headers using resolveValueForHeader
    var row = headers.map(function (h) {
      return resolveValueForHeader(h, data);
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
 * Run this function directly from Google Apps Script editor to:
 * 1. Clean up "RateCalculator" so it ONLY maintains the exact 14 columns in the exact requested order
 * 2. Remove all extra columns (type, address, dropAddress, pickupAddress, etc.)
 * 3. Preserve existing calculation data correctly mapped into the 14 columns!
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

    var isRate = (sheetName.toLowerCase().indexOf("rate") !== -1);

    if (isRate) {
      // 🎯 STRICTLY the 14 columns for RateCalculator - REMOVING ALL EXTRA COLUMNS!
      var targetHeaders = PREFERRED_HEADERS.RateCalculator.slice();

      // Alias lookup helper for RateCalculator columns from old sheets
      var aliasMapping = {
        "pickuppincode": ["pickuppincode", "pickup pincode", "pickup_pincode", "frompincode"],
        "droppincode": ["droppincode", "drop pincode", "drop_pincode", "topincode"],
        "name": ["name", "pickupname", "pickup name", "sendername", "customername"],
        "contactnumber": ["contactnumber", "contact number", "phone", "pickupphone", "pickup phone", "mobile"],
        "packagetype": ["packagetype", "package type *", "package type", "luggagetype", "luggage type", "package"],
        "deliveryspeed": ["deliveryspeed", "delivery speed *", "delivery speed", "service", "speed"],
        "weightkg": ["weightkg", "weight (kg) *", "weight (kg)", "weight", "weight_kg"],
        "lengthcm": ["lengthcm", "length (cm) *", "length (cm)", "length", "length_cm"],
        "widthcm": ["widthcm", "width (cm) *", "width (cm)", "width", "width_cm"],
        "heightcm": ["heightcm", "height (cm) *", "height (cm)", "height", "height_cm"],
        "ratecalculatorusedat": ["ratecalculatorusedat", "rate calculator used at", "usedat", "used at", "date", "timestamp"],
        "totalprice": ["totalprice", "total price", "total", "amount", "price"],
        "ratecalculatoramount": ["ratecalculatoramount", "rate calculator amount", "totalprice", "total", "amount"],
        "status": ["status", "state"]
      };

      // Find column index in current sheet for each target header
      var colIndices = targetHeaders.map(function (targetH) {
        var tNorm = normalizeKey(targetH);
        var aliases = aliasMapping[tNorm] || [tNorm];

        for (var c = 0; c < currentHeaders.length; c++) {
          var currNorm = normalizeKey(currentHeaders[c]);
          if (aliases.indexOf(currNorm) !== -1) {
            return c;
          }
        }
        return -1;
      });

      // Build clean 14-column rows
      var remappedData = [];
      for (var r = 0; r < allData.length; r++) {
        var newRow = [];
        for (var c = 0; c < targetHeaders.length; c++) {
          if (r === 0) {
            newRow.push(targetHeaders[c]);
          } else {
            var origIdx = colIndices[c];
            newRow.push(origIdx !== -1 ? allData[r][origIdx] : "");
          }
        }
        remappedData.push(newRow);
      }

      // Write clean data back to sheet (removes extra columns completely)
      sheet.clear();
      sheet.getRange(1, 1, remappedData.length, targetHeaders.length).setValues(remappedData);

      // Apply styling
      var headerRange = sheet.getRange(1, 1, 1, targetHeaders.length);
      headerRange
        .setFontWeight("bold")
        .setFontColor("#0F172A")
        .setBackground("#F1F5F9")
        .setVerticalAlignment("middle");
      sheet.setRowHeight(1, 35);
      sheet.setFrozenRows(1);

    } else {
      // Reorganize Bookings sheet if needed
      var preferredList = PREFERRED_HEADERS.Bookings.slice();

      currentHeaders.forEach(function (h) {
        if (!h) return;
        var hNorm = normalizeKey(h);
        var found = preferredList.some(function (p) {
          return normalizeKey(p) === hNorm;
        });
        if (!found) {
          preferredList.push(h);
        }
      });

      var finalHeaders = [];
      preferredList.forEach(function (targetH) {
        var targetHNorm = normalizeKey(targetH);
        var existingIndex = currentHeaders.findIndex(function (h) {
          return normalizeKey(h) === targetHNorm;
        });
        if (existingIndex !== -1 && finalHeaders.indexOf(currentHeaders[existingIndex]) === -1) {
          finalHeaders.push(currentHeaders[existingIndex]);
        }
      });

      var remappedDataBookings = [];
      for (var rb = 0; rb < allData.length; rb++) {
        var rowB = [];
        for (var cb = 0; cb < finalHeaders.length; cb++) {
          if (rb === 0) {
            rowB.push(finalHeaders[cb]);
          } else {
            var originalColIdx = currentHeaders.indexOf(finalHeaders[cb]);
            rowB.push(originalColIdx !== -1 ? allData[rb][originalColIdx] : "");
          }
        }
        remappedDataBookings.push(rowB);
      }

      sheet.clear();
      sheet.getRange(1, 1, remappedDataBookings.length, finalHeaders.length).setValues(remappedDataBookings);

      var headerRangeB = sheet.getRange(1, 1, 1, finalHeaders.length);
      headerRangeB
        .setFontWeight("bold")
        .setFontColor("#0F172A")
        .setBackground("#F1F5F9")
        .setVerticalAlignment("middle");
      sheet.setRowHeight(1, 35);
      sheet.setFrozenRows(1);
    }
  });
}
