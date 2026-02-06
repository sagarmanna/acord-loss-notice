import { useFormContext } from "react-hook-form";
import Input from "../ui/Input";
import RadioGroup from "../ui/RadioGroup";

const PHONE_TYPES = [
  { label: "HOME", value: "HOME" },
  { label: "BUS", value: "BUS" },
  { label: "CELL", value: "CELL" },
];

function AgencySection() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="section">
      <h2>Agency</h2>

      <div className="form-grid">
        <Input label="Name" name="agency.name" register={register} error={errors?.agency?.name?.message} />
        <Input label="Contact" name="agency.contact" register={register} />

        <Input label="Phone (A/C, No, Ext)" name="agency.phone" register={register} />
        <RadioGroup label="Phone Type" name="agency.phoneType" register={register} options={PHONE_TYPES} />

        <Input label="Fax (A/C, No)" name="agency.fax" register={register} />
        <Input label="E-mail" name="agency.email" register={register} error={errors?.agency?.email?.message} />

        <Input label="Address" name="agency.address" register={register} />
        <Input label="Code" name="agency.code" register={register} />
        <Input label="Subcode" name="agency.subcode" register={register} />
        <Input label="Agency Customer ID" name="agency.agencyCustomerId" register={register} />
      </div>
    </div>
  );
}

export default AgencySection;
