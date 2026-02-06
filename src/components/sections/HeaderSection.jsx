import { useFormContext } from "react-hook-form";
import Input from "../ui/Input";
import Select from "../ui/Select";

function HeaderSection() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="section">
      <h2>Automobile Loss Notice </h2>

      <div className="form-grid">
        <Input label="Date (MM/DD/YYYY)" name="header.formDate" type="date" register={register}
          error={errors?.header?.formDate?.message}
        />
        <Input label="Insured Location Code" name="header.insuredLocationCode" register={register} />

        <Input label="Date of Loss" name="header.dateOfLoss" type="date" register={register}
          error={errors?.header?.dateOfLoss?.message}
        />
        <Select
          label="Time"
          name="header.timeAmPm"
          register={register}
          options={[
            { label: "AM", value: "AM" },
            { label: "PM", value: "PM" },
          ]}
        />

        <Input label="Carrier" name="header.carrier" register={register} />
        <Input label="NAIC Code" name="header.naicCode" register={register} />

        <Input label="Policy Number" name="header.policyNumber" register={register}
          error={errors?.header?.policyNumber?.message}
        />
        <Input label="Line of Business" name="header.lineOfBusiness" register={register} />
      </div>
    </div>
  );
}

export default HeaderSection;
