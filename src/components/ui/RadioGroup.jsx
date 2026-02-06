function RadioGroup({ label, name, register, options = [], error }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="radioRow">
        {options.map((o) => (
          <label key={o.value} className="radioItem">
            <input type="radio" value={o.value} {...register(name)} />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
      {error ? <p className="error">{error}</p> : null}
    </div>
  );
}

export default RadioGroup;
