function InsuredSection() {
  return (
    <div className="section">
      <h2>Insured Information</h2>

      <div className="form-grid">
        <div className="form-group">
          <label>Insured Name</label>
          <input type="text" placeholder="Enter insured name" />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" />
        </div>
      </div>
    </div>
  );
}

export default InsuredSection;
