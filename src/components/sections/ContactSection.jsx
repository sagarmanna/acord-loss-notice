import { useFormContext } from "react-hook-form";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import RadioGroup from "../ui/RadioGroup";

const PHONE_TYPES = [
  { label: "HOME", value: "HOME" },
  { label: "BUS", value: "BUS" },
  { label: "CELL", value: "CELL" },
];

function ContactSection() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="section">
      <h2>Contact</h2>

      <div className="form-grid">
        <Input label="Name of Contact (First, Middle, Last)" name="contact.name" register={register} />
        <Input label="Contact's Mailing Address" name="contact.mailingAddress" register={register} />

        <div className="form-group">
          <label>Contact Insured</label>
          <Checkbox label="Yes" name="contact.contactInsured" register={register} />
        </div>

        <Input label="When to Contact" name="contact.whenToContact" register={register} />

        <Input label="Primary Phone #" name="contact.primaryPhone" register={register} />
        <RadioGroup label="Primary Phone Type" name="contact.primaryPhoneType" register={register} options={PHONE_TYPES} />

        <Input label="Secondary Phone #" name="contact.secondaryPhone" register={register} />
        <RadioGroup label="Secondary Phone Type" name="contact.secondaryPhoneType" register={register} options={PHONE_TYPES} />

        <Input label="Primary E-mail Address" name="contact.primaryEmail" register={register}
          error={errors?.contact?.primaryEmail?.message}
        />
        <Input label="Secondary E-mail Address" name="contact.secondaryEmail" register={register}
          error={errors?.contact?.secondaryEmail?.message}
        />
      </div>
    </div>
  );
}

export default ContactSection;
