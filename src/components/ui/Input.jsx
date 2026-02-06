function Input({ label, name, register, error, type = "text", placeholder }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} placeholder={placeholder} {...register(name)} />
      {error ? <p className="error">{error}</p> : null}
    </div>
  );
}
export default Input;
