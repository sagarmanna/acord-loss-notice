import { useFieldArray, useFormContext } from "react-hook-form";
import { v4 as uuid } from "uuid";

function WitnessesTable() {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "witnesses" });

  return (
    <div className="section">
      <h2>Witnesses or Passengers</h2>

      <div className="actions">
        <button type="button" className="secondary" onClick={() => append({ _id: uuid() })}>
          Add Row
        </button>
        <button type="button" className="danger" onClick={() => fields.length && remove(fields.length - 1)}>
          Remove Last
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name & Address</th>
            <th>Phone (A/C, No)</th>
            <th>INS</th>
            <th>OTH</th>
            <th>VEH</th>
            <th>Other (Specify)</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((f, i) => (
            <tr key={f.id}>
              <td><textarea {...register(`witnesses.${i}.nameAddress`)} /></td>
              <td><input {...register(`witnesses.${i}.phone`)} /></td>
              <td><input type="checkbox" {...register(`witnesses.${i}.ins`)} /></td>
              <td><input type="checkbox" {...register(`witnesses.${i}.oth`)} /></td>
              <td><input type="checkbox" {...register(`witnesses.${i}.veh`)} /></td>
              <td><textarea {...register(`witnesses.${i}.otherSpecify`)} /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-grid" style={{ marginTop: 14 }}>
        <div className="form-group">
          <label>Reported By</label>
          <input {...register("reportedBy")} />
        </div>
        <div className="form-group">
          <label>Reported To</label>
          <input {...register("reportedTo")} />
        </div>
      </div>
    </div>
  );
}

export default WitnessesTable;
