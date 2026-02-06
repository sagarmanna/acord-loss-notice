import { useFormContext } from "react-hook-form";

function RemarksSection() {
  const { register } = useFormContext();

  return (
    <div className="section">
      <h2>Remarks</h2>
      <textarea {...register("remarks")} placeholder="Additional remarks..." />
    </div>
  );
}

export default RemarksSection;
