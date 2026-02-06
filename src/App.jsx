import { useState } from "react";
import "./index.css";
import FormPage from "./pages/FormPage";
import PreviewPage from "./pages/PreviewPage";

function App() {
  const [previewData, setPreviewData] = useState(null);

  return (
    <div className="container">
      <h1>ACORD Automobile Loss Notice</h1>

      {previewData ? (
        <PreviewPage data={previewData} onBack={() => setPreviewData(null)} />
      ) : (
        <FormPage onPreview={(data) => setPreviewData(data)} />
      )}
    </div>
  );
}

export default App;

