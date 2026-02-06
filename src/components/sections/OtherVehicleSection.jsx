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

function OtherVehicleSection() {
  const { register } = useFormContext();

  return (
    <div className="section">
      <h2>Other Vehicle / Property Damaged</h2>

      <div className="form-grid">
        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <Checkbox label="Non - vehicle?" name="otherVehicle.nonVehicle" register={register} />
        </div>

        <Input label="Veh #" name="otherVehicle.vehNo" register={register} />
        <Input label="Year" name="otherVehicle.year" register={register} />
        <Input label="Make" name="otherVehicle.make" register={register} />
        <Input label="Model" name="otherVehicle.model" register={register} />
        <Input label="Body" name="otherVehicle.bodyType" register={register} />
        <Input label="Type" name="otherVehicle.type" register={register} />
        <Input label="VIN" name="otherVehicle.vin" register={register} />
        <Input label="Plate Number" name="otherVehicle.plateNumber" register={register} />
        <Input label="Plate State" name="otherVehicle.plateState" register={register} />

        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <label>Describe Property (Other Than Vehicle)</label>
          <textarea {...register("otherVehicle.describeProperty")} />
        </div>

        <Select
          label="Other veh/prop insured? (Y/N)"
          name="otherVehicle.otherVehPropIns"
          register={register}
          options={YN}
        />

        <Input label="Carrier or Agency Name" name="otherVehicle.carrierOrAgencyName" register={register} />
        <Input label="NAIC Code" name="otherVehicle.otherNaicCode" register={register} />
        <Input label="Policy Number" name="otherVehicle.otherPolicyNumber" register={register} />

        {/* Owner */}
        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <label>Owner's Name and Address</label>
          <textarea {...register("otherVehicle.ownerNameAddress")} />
        </div>

        <Input label="Owner Primary Phone #" name="otherVehicle.ownerPrimaryPhone" register={register} />
        <RadioGroup
          label="Owner Primary Phone Type"
          name="otherVehicle.ownerPrimaryPhoneType"
          register={register}
          options={PHONE_TYPES}
        />

        <Input label="Owner Secondary Phone #" name="otherVehicle.ownerSecondaryPhone" register={register} />
        <RadioGroup
          label="Owner Secondary Phone Type"
          name="otherVehicle.ownerSecondaryPhoneType"
          register={register}
          options={PHONE_TYPES}
        />

        <Input label="Owner Primary Email" name="otherVehicle.ownerPrimaryEmail" register={register} />
        <Input label="Owner Secondary Email" name="otherVehicle.ownerSecondaryEmail" register={register} />

        {/* Driver */}
        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <Checkbox label="Driver same as owner" name="otherVehicle.driverSameAsOwner" register={register} />
        </div>

        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <label>Driver's Name and Address</label>
          <textarea {...register("otherVehicle.driverNameAddress")} />
        </div>

        <Input label="Driver Primary Phone #" name="otherVehicle.driverPrimaryPhone" register={register} />
        <RadioGroup
          label="Driver Primary Phone Type"
          name="otherVehicle.driverPrimaryPhoneType"
          register={register}
          options={PHONE_TYPES}
        />

        <Input label="Driver Secondary Phone #" name="otherVehicle.driverSecondaryPhone" register={register} />
        <RadioGroup
          label="Driver Secondary Phone Type"
          name="otherVehicle.driverSecondaryPhoneType"
          register={register}
          options={PHONE_TYPES}
        />

        <Input label="Driver Primary Email" name="otherVehicle.driverPrimaryEmail" register={register} />
        <Input label="Driver Secondary Email" name="otherVehicle.driverSecondaryEmail" register={register} />

        {/* Damage */}
        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <label>Describe Damage</label>
          <textarea {...register("otherVehicle.describeDamage")} />
        </div>

        <Input label="Estimate Amount" name="otherVehicle.estimateAmount" register={register} />
        <Input label="Where can damage be seen?" name="otherVehicle.whereCanDamageBeSeen" register={register} />
      </div>
    </div>
  );
}

export default OtherVehicleSection;
