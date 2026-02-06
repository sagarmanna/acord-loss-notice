function Select({ label, name, register, error, options = [] }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...register(name)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error ? <p className="error">{error}</p> : null}
    </div>
  );
}
export default Select;
