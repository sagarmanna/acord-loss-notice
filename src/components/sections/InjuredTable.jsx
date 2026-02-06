import { useFieldArray, useFormContext } from "react-hook-form";
import { v4 as uuid } from "uuid";

function InjuredTable() {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "injured" });

  return (
    <div className="section">
      <h2>Injured</h2>

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
            <th>PED</th>
            <th>Age</th>
            <th>Extent of Injury</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((f, i) => (
            <tr key={f.id}>
              <td><textarea {...register(`injured.${i}.nameAddress`)} /></td>
              <td><input {...register(`injured.${i}.phone`)} /></td>
              <td><input type="checkbox" {...register(`injured.${i}.ins`)} /></td>
              <td><input type="checkbox" {...register(`injured.${i}.oth`)} /></td>
              <td><input type="checkbox" {...register(`injured.${i}.veh`)} /></td>
              <td><input type="checkbox" {...register(`injured.${i}.ped`)} /></td>
              <td><input {...register(`injured.${i}.age`)} /></td>
              <td><textarea {...register(`injured.${i}.extentOfInjury`)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InjuredTable;
