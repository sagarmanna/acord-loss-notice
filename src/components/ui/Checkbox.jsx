function Checkbox({ label, name, register }) {
  return (
    <label className="checkbox">
      <input type="checkbox" {...register(name)} />
      <span>{label}</span>
    </label>
  );
}
export default Checkbox;
