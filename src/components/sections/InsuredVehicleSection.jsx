import { useFormContext } from "react-hook-form";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Checkbox from "../ui/Checkbox";
import RadioGroup from "../ui/RadioGroup";

const YN = [
  { label: "Select", value: "" },
  { label: "Yes", value: "Y" },
  { label: "No", value: "N" },
];

const PHONE_TYPES = [
  { label: "HOME", value: "HOME" },
  { label: "BUS", value: "BUS" },
  { label: "CELL", value: "CELL" },
];

function InsuredVehicleSection() {
  const { register } = useFormContext();

  return (
    <div className="section">
      <h2>Insured Vehicle</h2>

      <div className="form-grid">
        <Input label="Veh #" name="insuredVehicle.vehNo" register={register} />
        <Input label="Year" name="insuredVehicle.year" register={register} />
        <Input label="Make" name="insuredVehicle.make" register={register} />
        <Input label="Model" name="insuredVehicle.model" register={register} />
        <Input label="Body" name="insuredVehicle.bodyType" register={register} />
        <Input label="Type" name="insuredVehicle.type" register={register} />
        <Input label="VIN" name="insuredVehicle.vin" register={register} />
        <Input label="Plate Number" name="insuredVehicle.plateNumber" register={register} />
        <Input label="Plate State" name="insuredVehicle.plateState" register={register} />

        {/* Owner */}
        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <Checkbox
            label="Owner same as insured"
            name="insuredVehicle.ownerSameAsInsured"
            register={register}
          />
        </div>

        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <label>Owner's Name and Address</label>
          <textarea {...register("insuredVehicle.ownerNameAddress")} />
        </div>

        <Input
          label="Owner Primary Phone #"
          name="insuredVehicle.ownerPrimaryPhone"
          register={register}
        />
        <RadioGroup
          label="Owner Primary Phone Type"
          name="insuredVehicle.ownerPrimaryPhoneType"
          register={register}
          options={PHONE_TYPES}
        />

        <Input
          label="Owner Secondary Phone #"
          name="insuredVehicle.ownerSecondaryPhone"
          register={register}
        />
        <RadioGroup
          label="Owner Secondary Phone Type"
          name="insuredVehicle.ownerSecondaryPhoneType"
          register={register}
          options={PHONE_TYPES}
        />

        <Input
          label="Owner Primary Email"
          name="insuredVehicle.ownerPrimaryEmail"
          register={register}
        />
        <Input
          label="Owner Secondary Email"
          name="insuredVehicle.ownerSecondaryEmail"
          register={register}
        />

        {/* Driver */}
        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <Checkbox
            label="Driver same as owner"
            name="insuredVehicle.driverSameAsOwner"
            register={register}
          />
        </div>

        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <label>Driver's Name and Address</label>
          <textarea {...register("insuredVehicle.driverNameAddress")} />
        </div>

        <Input
          label="Driver Primary Phone #"
          name="insuredVehicle.driverPrimaryPhone"
          register={register}
        />
        <RadioGroup
          label="Driver Primary Phone Type"
          name="insuredVehicle.driverPrimaryPhoneType"
          register={register}
          options={PHONE_TYPES}
        />

        <Input
          label="Driver Secondary Phone #"
          name="insuredVehicle.driverSecondaryPhone"
          register={register}
        />
        <RadioGroup
          label="Driver Secondary Phone Type"
          name="insuredVehicle.driverSecondaryPhoneType"
          register={register}
          options={PHONE_TYPES}
        />

        <Input
          label="Driver Primary Email"
          name="insuredVehicle.driverPrimaryEmail"
          register={register}
        />
        <Input
          label="Driver Secondary Email"
          name="insuredVehicle.driverSecondaryEmail"
          register={register}
        />

        {/* Driver details */}
        <Input
          label="Relation to Insured"
          name="insuredVehicle.relationToInsured"
          register={register}
        />
        <Input
          label="Driver Date of Birth"
          name="insuredVehicle.driverDob"
          type="date"
          register={register}
        />
        <Input
          label="Driver License Number"
          name="insuredVehicle.driverLicenseNo"
          register={register}
        />
        <Input
          label="License State"
          name="insuredVehicle.driverLicenseState"
          register={register}
        />
        <Input
          label="Purpose of Use"
          name="insuredVehicle.purposeOfUse"
          register={register}
        />
        <Input
          label="Used with permission? (Y/N)"
          name="insuredVehicle.usedWithPermission"
          register={register}
        />

        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <label>Describe Damage</label>
          <textarea {...register("insuredVehicle.describeDamage")} />
        </div>

        <Input
          label="Estimate Amount"
          name="insuredVehicle.estimateAmount"
          register={register}
        />
        <Input
          label="Where can vehicle be seen?"
          name="insuredVehicle.whereCanVehicleBeSeen"
          register={register}
        />
        <Input
          label="When can vehicle be seen?"
          name="insuredVehicle.whenCanVehicleBeSeen"
          register={register}
        />

        <Input
          label="Other Insurance on Vehicle - Carrier"
          name="insuredVehicle.otherInsuranceCarrier"
          register={register}
        />
        <Input
          label="Other Insurance Policy #"
          name="insuredVehicle.otherInsurancePolicyNumber"
          register={register}
        />

        {/* Child seat questions */}
        <Select
          label="Child seat installed?"
          name="insuredVehicle.childSeatInstalled"
          register={register}
          options={YN}
        />
        <Select
          label="Child seat in use?"
          name="insuredVehicle.childSeatInUse"
          register={register}
          options={YN}
        />
        <Select
          label="Child seat sustained loss?"
          name="insuredVehicle.childSeatSustainedLoss"
          register={register}
          options={YN}
        />
      </div>
    </div>
  );
}

export default InsuredVehicleSection;
