function InvoiceContent({ values, price }) {
  return (
    <>
      {/* ================= HEADER ================= */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "2px solid #E5E7EB",
          paddingBottom: 16,
          marginBottom: 24,
        }}
      >
        <div>
          <h1
            style={{
              color: "#1D4ED8",
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            FRISBI LOGISTICS
          </h1>
          <p style={{ color: "#6B7280", fontSize: 14 }}>
            Door-to-Door Luggage Delivery
          </p>
        </div>

        <div style={{ textAlign: "right", fontSize: 14 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600 }}>INVOICE</h2>
          <p>Date: {new Date().toLocaleDateString()}</p>
          <p>Invoice No: INV-{Date.now()}</p>
        </div>
      </div>

      {/* ================= CUSTOMER & SHIPMENT ================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginBottom: 24,
          fontSize: 14,
        }}
      >
        {/* Customer */}
        <div>
          <h4 style={{ fontWeight: 600, marginBottom: 8 }}>
            Customer Details
          </h4>
          <p><b>Name:</b> {values.name}</p>
          <p><b>Phone:</b> {values.phone}</p>
          <p><b>Email:</b> {values.email}</p>
          <p><b>Customer Type:</b> {values.customerType}</p>

          {values.companyName && (
            <>
              <p><b>Company:</b> {values.companyName}</p>
              <p><b>GST No:</b> {values.gstNumber}</p>
            </>
          )}
        </div>

        {/* Shipment */}
        <div>
          <h4 style={{ fontWeight: 600, marginBottom: 8 }}>
            Shipment Details
          </h4>
          <p><b>Pickup City:</b> {values.pickupCity}</p>
          <p><b>Drop City:</b> {values.dropCity}</p>
          <p><b>Pickup Date:</b> {values.pickupDate}</p>
          <p><b>Delivery Date:</b> {values.deliveryDate}</p>
          <p><b>Time Slot:</b> {values.pickupTimeSlot}</p>
        </div>
      </div>

      {/* ================= SERVICE & LUGGAGE TABLE ================= */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 14,
          marginBottom: 24,
        }}
      >
        <thead style={{ backgroundColor: "#F3F4F6" }}>
          <tr>
            <th style={th}>Description</th>
            <th style={th}>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Service Type</td>
            <td style={td}>{values.service}</td>
          </tr>
          <tr>
            <td style={td}>Total Weight</td>
            <td style={td}>{values.weight} kg</td>
          </tr>
          <tr>
            <td style={td}>Bag Size</td>
            <td style={td}>{values.bagSize}</td>
          </tr>
          <tr>
            <td style={td}>Luggage Type</td>
            <td style={td}>{values.luggageType}</td>
          </tr>
          <tr>
            <td style={td}>Add-ons</td>
            <td style={td}>
              {values.addons && values.addons.length
                ? values.addons.join(", ")
                : "None"}
            </td>
          </tr>
          <tr>
            <td style={td}>Payment Mode</td>
            <td style={td}>{values.paymentMode}</td>
          </tr>
        </tbody>
      </table>

      {/* ================= PRICE SUMMARY ================= */}
      <div
        style={{
          width: "50%",
          marginLeft: "auto",
          border: "1px solid #E5E7EB",
          borderRadius: 8,
          padding: 16,
          fontSize: 14,
        }}
      >
        <Row label="Subtotal" value={`₹${price.subtotal}`} />

        {price.discount > 0 && (
          <Row
            label="Discount"
            value={`-₹${price.discount}`}
            color="#16A34A"
          />
        )}

        {price.gst > 0 && (
          <Row label="GST (18%)" value={`₹${price.gst}`} />
        )}

        <div style={{ borderTop: "1px solid #E5E7EB", marginTop: 8, paddingTop: 8 }}>
          <Row
            label="Total Payable"
            value={`₹${price.total}`}
            bold
          />
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div
        style={{
          marginTop: 40,
          borderTop: "1px solid #E5E7EB",
          paddingTop: 16,
          textAlign: "center",
          fontSize: 13,
          color: "#6B7280",
        }}
      >
        <p>Thank you for choosing Frisbi Logistics 🚚</p>
        <p>info@frisbi.in | +91 74181 52531</p>
      </div>
    </>
  );
}

/* ================= HELPERS ================= */

const th = {
  border: "1px solid #E5E7EB",
  padding: 8,
  textAlign: "left",
  fontWeight: 600,
};

const td = {
  border: "1px solid #E5E7EB",
  padding: 8,
};

function Row({ label, value, bold = false, color }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 6,
        fontWeight: bold ? 700 : 400,
        color: color || "#000",
      }}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

export default InvoiceContent;
