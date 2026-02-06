import { useFormContext } from "react-hook-form";
import Input from "../ui/Input";

function LossSection() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="section">
      <h2>Loss</h2>

      <div className="form-grid">
        <Input label="Street" name="loss.locationStreet" register={register} />
        <Input label="City, State, ZIP" name="loss.locationCityStateZip" register={register} />
        <Input label="Country" name="loss.locationCountry" register={register} />
        <Input label="Police or Fire Department Contacted" name="loss.policeOrFireContacted" register={register} />
        <Input label="Report Number" name="loss.reportNumber" register={register} />
        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <label>Describe location if not at specific street address</label>
          <textarea {...register("loss.describeLocationIfNoStreet")} />
        </div>
        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <label>Description of Accident</label>
          <textarea {...register("loss.descriptionOfAccident")} />
          {errors?.loss?.descriptionOfAccident?.message ? (
            <p className="error">{errors.loss.descriptionOfAccident.message}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default LossSection;
