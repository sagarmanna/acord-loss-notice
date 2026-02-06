import { printPreview } from "../utils/pdfExport";

function Row({ label, value }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "10px", padding: "6px 0" }}>
      <div style={{ fontWeight: 600 }}>{label}</div>
      <div style={{ whiteSpace: "pre-wrap" }}>{value || "-"}</div>
    </div>
  );
}

function PreviewPage({ data, onBack }) {
  return (
    <div>
      <div className="actions">
        <button className="secondary" onClick={onBack}>Back to Edit</button>
        <button onClick={printPreview}>Export / Save as PDF</button>
      </div>

      <div className="section">
        <h2>Header</h2>
        <Row label="Date" value={data.header.formDate} />
        <Row label="Insured Location Code" value={data.header.insuredLocationCode} />
        <Row label="Date of Loss" value={`${data.header.dateOfLoss} ${data.header.timeAmPm}`} />
        <Row label="Carrier" value={data.header.carrier} />
        <Row label="NAIC Code" value={data.header.naicCode} />
        <Row label="Policy Number" value={data.header.policyNumber} />
        <Row label="Line of Business" value={data.header.lineOfBusiness} />
      </div>

      <div className="section">
        <h2>Agency</h2>
        <Row label="Name" value={data.agency.name} />
        <Row label="Contact" value={data.agency.contact} />
        <Row label="Phone" value={`${data.agency.phone || ""} (${data.agency.phoneType || "-"})`} />
        <Row label="Fax" value={data.agency.fax} />
        <Row label="Email" value={data.agency.email} />
        <Row label="Address" value={data.agency.address} />
        <Row label="Code / Subcode" value={`${data.agency.code || ""} / ${data.agency.subcode || ""}`} />
        <Row label="Agency Customer ID" value={data.agency.agencyCustomerId} />
      </div>

      <div className="section">
        <h2>Insured</h2>
        <Row label="Name" value={data.insured.name} />
        <Row label="Mailing Address" value={data.insured.mailingAddress} />
        <Row label="DOB" value={data.insured.dateOfBirth} />
        <Row label="FEIN" value={data.insured.fein} />
        <Row label="Marital/Civil Union" value={data.insured.maritalOrCivilUnion} />
        <Row label="Primary Phone" value={`${data.insured.primaryPhone || ""} (${data.insured.primaryPhoneType || "-"})`} />
        <Row label="Secondary Phone" value={`${data.insured.secondaryPhone || ""} (${data.insured.secondaryPhoneType || "-"})`} />
        <Row label="Primary Email" value={data.insured.primaryEmail} />
        <Row label="Secondary Email" value={data.insured.secondaryEmail} />
      </div>

      <div className="section">
        <h2>Contact</h2>
        <Row label="Name" value={data.contact.name} />
        <Row label="Mailing Address" value={data.contact.mailingAddress} />
        <Row label="Contact Insured" value={data.contact.contactInsured ? "Yes" : "No"} />
        <Row label="When to Contact" value={data.contact.whenToContact} />
        <Row label="Primary Phone" value={`${data.contact.primaryPhone || ""} (${data.contact.primaryPhoneType || "-"})`} />
        <Row label="Secondary Phone" value={`${data.contact.secondaryPhone || ""} (${data.contact.secondaryPhoneType || "-"})`} />
        <Row label="Primary Email" value={data.contact.primaryEmail} />
        <Row label="Secondary Email" value={data.contact.secondaryEmail} />
      </div>

      <div className="section">
        <h2>Loss</h2>
        <Row label="Location (Street)" value={data.loss.locationStreet} />
        <Row label="City/State/ZIP" value={data.loss.locationCityStateZip} />
        <Row label="Country" value={data.loss.locationCountry} />
        <Row label="Describe location if not specific street address" value={data.loss.describeLocationIfNoStreet} />
        <Row label="Police/Fire Dept Contacted" value={data.loss.policeOrFireContacted} />
        <Row label="Report Number" value={data.loss.reportNumber} />
        <Row label="Description of Accident" value={data.loss.descriptionOfAccident} />
      </div>

      <div className="section">
        <h2>Injured</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name & Address</th><th>Phone</th><th>INS</th><th>OTH</th><th>VEH</th><th>PED</th><th>Age</th><th>Extent</th>
            </tr>
          </thead>
          <tbody>
            {(data.injured || []).map((r, i) => (
              <tr key={i}>
                <td>{r.nameAddress || "-"}</td>
                <td>{r.phone || "-"}</td>
                <td>{r.ins ? "✓" : ""}</td>
                <td>{r.oth ? "✓" : ""}</td>
                <td>{r.veh ? "✓" : ""}</td>
                <td>{r.ped ? "✓" : ""}</td>
                <td>{r.age || "-"}</td>
                <td>{r.extentOfInjury || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Witnesses / Passengers</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name & Address</th><th>Phone</th><th>INS</th><th>OTH</th><th>VEH</th><th>Other</th>
            </tr>
          </thead>
          <tbody>
            {(data.witnesses || []).map((r, i) => (
              <tr key={i}>
                <td>{r.nameAddress || "-"}</td>
                <td>{r.phone || "-"}</td>
                <td>{r.ins ? "✓" : ""}</td>
                <td>{r.oth ? "✓" : ""}</td>
                <td>{r.veh ? "✓" : ""}</td>
                <td>{r.otherSpecify || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: 10 }}>
          <Row label="Reported By" value={data.reportedBy} />
          <Row label="Reported To" value={data.reportedTo} />
        </div>
      </div>

      <div className="section">
        <h2>Remarks</h2>
        <div style={{ whiteSpace: "pre-wrap" }}>{data.remarks || "-"}</div>
      </div>
    </div>
  );
}

export default PreviewPage;
