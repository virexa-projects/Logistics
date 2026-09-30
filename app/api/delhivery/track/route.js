export const runtime = "nodejs";

import { API_CONFIG } from "@/utils/apiConfig";

/**
 * Normalizes Delhivery response to match the Xpressbees tracking structure
 */
function normalizeDelhiveryResponse(raw, waybill) {
  if (!raw) return null;

  // Delhivery structure: { ShipmentData: [ { Shipment: { AWB, Status, Scans, ReferenceNo, ... } } ] }
  let shipmentItem = null;
  if (Array.isArray(raw.ShipmentData) && raw.ShipmentData.length > 0) {
    shipmentItem = raw.ShipmentData[0]?.Shipment || raw.ShipmentData[0];
  } else if (raw.Shipment) {
    shipmentItem = raw.Shipment;
  } else if (raw.AWB || raw.Status) {
    shipmentItem = raw;
  }

  if (!shipmentItem || !shipmentItem.Status) {
    return null;
  }

  // Status can be string or object { Status, StatusDateTime, StatusType, ... }
  let statusText = "In Transit";
  if (typeof shipmentItem.Status === "object" && shipmentItem.Status !== null) {
    statusText =
      shipmentItem.Status.Status ||
      shipmentItem.Status.StatusType ||
      shipmentItem.Status.Instructions ||
      "In Transit";
  } else if (typeof shipmentItem.Status === "string") {
    statusText = shipmentItem.Status;
  }

  // Scans array
  const rawScans = Array.isArray(shipmentItem.Scans) ? shipmentItem.Scans : [];
  const history = rawScans.map((s) => {
    const detail = s?.ScanDetail || s || {};
    return {
      message:
        detail.Scan ||
        detail.Instructions ||
        detail.StatusCode ||
        detail.Status ||
        "Status updated",
      location:
        detail.ScannedLocation ||
        detail.ScanLocation ||
        detail.Location ||
        "",
      event_time:
        detail.ScanDateTime ||
        detail.StatusDateTime ||
        detail.DateTime ||
        "",
    };
  });

  return {
    status: true,
    courier: "Delhivery",
    data: {
      status: statusText,
      awb_number: shipmentItem.AWB || waybill,
      order_number:
        shipmentItem.ReferenceNo ||
        shipmentItem.OrderNo ||
        shipmentItem.AWB ||
        waybill,
      history,
    },
    raw,
  };
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const waybill = (searchParams.get("waybill") || searchParams.get("awb") || "").trim();

    if (!waybill) {
      return Response.json(
        { status: false, message: "Waybill / AWB is required" },
        { status: 400 }
      );
    }

    const authKey = (API_CONFIG.DELHIVERY_AUTH_KEY || "").trim();
    const cleanToken = authKey.replace(/^(Token|Bearer)\s+/i, "");

    // Prepare URL
    let baseUrl = API_CONFIG.DELHIVERY_TRACK_URL || "https://track.delhivery.com/api/v1/packages/json/?waybill=";
    let url;
    if (baseUrl.includes("waybill=")) {
      url = `${baseUrl}${encodeURIComponent(waybill)}`;
    } else {
      const sep = baseUrl.includes("?") ? "&" : "?";
      url = `${baseUrl}${sep}waybill=${encodeURIComponent(waybill)}`;
    }

    // Attach token query param if available
    if (cleanToken && !url.includes("token=")) {
      url += `&token=${encodeURIComponent(cleanToken)}`;
    }

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    };

    if (authKey) {
      headers["Authorization"] = authKey.startsWith("Token ") || authKey.startsWith("Bearer ")
        ? authKey
        : `Token ${authKey}`;
    }

    const res = await fetch(url, {
      method: "GET",
      headers,
      cache: "no-store",
    });

    if (!res.ok) {
      const errBody = await res.text().catch(() => "");
      return Response.json(
        {
          status: false,
          courier: "Delhivery",
          message: `Delhivery API returned ${res.status}`,
          details: errBody,
        },
        { status: 200 } // Return 200 to client so fallback logic can inspect it gracefully
      );
    }

    const rawData = await res.json();
    let normalized = normalizeDelhiveryResponse(rawData, waybill);

    // If not found by waybill, attempt search by ref_ids (Order ID / Reference No)
    if (!normalized) {
      let refUrl = `https://track.delhivery.com/api/v1/packages/json/?ref_ids=${encodeURIComponent(waybill)}`;
      if (cleanToken) {
        refUrl += `&token=${encodeURIComponent(cleanToken)}`;
      }
      try {
        const refRes = await fetch(refUrl, {
          method: "GET",
          headers,
          cache: "no-store",
        });
        if (refRes.ok) {
          const refData = await refRes.json();
          normalized = normalizeDelhiveryResponse(refData, waybill);
        }
      } catch (e) {
        console.warn("Delhivery ref_ids fallback error:", e);
      }
    }

    if (normalized) {
      return Response.json(normalized);
    }

    return Response.json({
      status: false,
      courier: "Delhivery",
      message: "No shipment details found in Delhivery for this code",
      raw: rawData,
    });
  } catch (error) {
    console.error("Delhivery tracking API error:", error);
    return Response.json(
      {
        status: false,
        courier: "Delhivery",
        message: error.message || "Failed to fetch Delhivery tracking data",
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const waybill = (body.waybill || body.awb || "").trim();

    if (!waybill) {
      return Response.json(
        { status: false, message: "Waybill / AWB is required" },
        { status: 400 }
      );
    }

    const authKey = (API_CONFIG.DELHIVERY_AUTH_KEY || "").trim();
    const cleanToken = authKey.replace(/^(Token|Bearer)\s+/i, "");

    let baseUrl = API_CONFIG.DELHIVERY_TRACK_URL || "https://track.delhivery.com/api/v1/packages/json/?waybill=";
    let url;
    if (baseUrl.includes("waybill=")) {
      url = `${baseUrl}${encodeURIComponent(waybill)}`;
    } else {
      const sep = baseUrl.includes("?") ? "&" : "?";
      url = `${baseUrl}${sep}waybill=${encodeURIComponent(waybill)}`;
    }

    if (cleanToken && !url.includes("token=")) {
      url += `&token=${encodeURIComponent(cleanToken)}`;
    }

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    };

    if (authKey) {
      headers["Authorization"] = authKey.startsWith("Token ") || authKey.startsWith("Bearer ")
        ? authKey
        : `Token ${authKey}`;
    }

    const res = await fetch(url, {
      method: "GET",
      headers,
      cache: "no-store",
    });

    if (!res.ok) {
      const errBody = await res.text().catch(() => "");
      return Response.json({
        status: false,
        courier: "Delhivery",
        message: `Delhivery API returned ${res.status}`,
        details: errBody,
      });
    }

    const rawData = await res.json();
    const normalized = normalizeDelhiveryResponse(rawData, waybill);

    if (normalized) {
      return Response.json(normalized);
    }

    return Response.json({
      status: false,
      courier: "Delhivery",
      message: "No shipment details found in Delhivery for this code",
      raw: rawData,
    });
  } catch (error) {
    console.error("Delhivery tracking API error:", error);
    return Response.json(
      {
        status: false,
        courier: "Delhivery",
        message: error.message || "Failed to fetch Delhivery tracking data",
      },
      { status: 500 }
    );
  }
}
