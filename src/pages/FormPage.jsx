import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import HeaderSection from "../components/sections/HeaderSection";

import { acordSchema, defaultValues } from "../schema/acordSchema";
import { saveDraft, loadDraft, clearDraft } from "../utils/storage";

import AgencySection from "../components/sections/AgencySection";
import InsuredSection from "../components/sections/InsuredSection";
import ContactSection from "../components/sections/ContactSection";
import LossSection from "../components/sections/LossSection";
import InsuredVehicleSection from "../components/sections/InsuredVehicleSection";
import OtherVehicleSection from "../components/sections/OtherVehicleSection";
import InjuredTable from "../components/sections/InjuredTable";
import WitnessesTable from "../components/sections/WitnessesTable";
import RemarksSection from "../components/sections/RemarksSection";

function FormPage({ onPreview }) {
  const methods = useForm({
    resolver: zodResolver(acordSchema),
    defaultValues,
    mode: "onBlur",
  });

  const { handleSubmit, reset, watch, formState } = methods;



  const submit = (data) => onPreview(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>
        <HeaderSection />
<AgencySection />

        <AgencySection />
        <InsuredSection />
        <ContactSection />
        <LossSection />
        <InsuredVehicleSection />
        <OtherVehicleSection />
        <InjuredTable />
        <WitnessesTable />
        <RemarksSection />

        <div className="actions">
          <button type="submit" disabled={formState.isSubmitting}>
            Preview
          </button>
          <button
  type="button"
  className="secondary"
  onClick={() => saveDraft(methods.getValues())}
>
  Save Draft
</button>

<button
  type="button"
  className="secondary"
  onClick={() => {
    const draft = loadDraft();
    if (draft) reset(draft);
  }}
>
  Load Draft
</button>

<button
  type="button"
  className="danger"
  onClick={() => {
    clearDraft();
    reset(defaultValues);
  }}
>
  Clear Draft
</button>

        </div>

        {Object.keys(formState.errors).length ? (
          <p className="error" style={{ marginTop: 10 }}>
            Please fix the highlighted errors.
          </p>
        ) : null}
      </form>
    </FormProvider>
  );
}

export default FormPage;
