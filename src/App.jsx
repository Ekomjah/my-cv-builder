import { useState } from "react";
import "./App.css";
import Form from "./components/form/form";
import Preview from "./components/preview/previewPane";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./printer.jsx";

function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    jobTitle: "",
    tel: "",
    img: "",
    location: "",
    portfolio: "",
  });

  const [education, setEducation] = useState([
    { id: 0, school: "", subject: "", course: "", startDate: "" },
  ]);

  const [work, setWork] = useState([
    { id: 0, company: "", position: "", description: "", from: "", till: "" },
  ]);

  const [isFormShowing, setIsFormShowing] = useState(true);

  document.documentElement.classList.add("dark");

  return (
    <div className="space-y-4 p-6">
      {/* Toggle button - only visible below XL */}
      <div className="flex justify-end xl:hidden">
        <button
          onClick={() => setIsFormShowing(!isFormShowing)}
          className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-800"
        >
          {isFormShowing ? "Show Preview" : "Show Form"}
        </button>
      </div>

      {/* Grid layout for XL and above */}
      <div className="grid-layout-xl">
        <Form
          info={info}
          setInfo={setInfo}
          education={education}
          setEducation={setEducation}
          work={work}
          setWork={setWork}
        />
        <Preview info={info} education={education} work={work} />
      </div>

      {/* Below XL: show only one view at a time */}
      <div className="xl:hidden">
        {isFormShowing ? (
          <Form
            info={info}
            setInfo={setInfo}
            education={education}
            setEducation={setEducation}
            work={work}
            setWork={setWork}
          />
        ) : (
          <Preview info={info} education={education} work={work} />
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* Show these buttons only when preview is visible on small screens */}
        {!isFormShowing && (
          <>
            <button
              className="no-print rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700"
              onClick={() => window.print()}
            >
              Print Me
            </button>
            <button
              className="no-print rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-700 xl:hidden"
              onClick={() => setIsFormShowing(true)}
            >
              Continue Editing
            </button>
          </>
        )}

        {/* Print button for XL and above */}
        <button
          className="xl-block no-print hide-me hidden rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700"
          onClick={() => window.print()}
        >
          Print Me
        </button>

        {/* PDF Download button - always visible */}
        <PDFDownloadLink
          document={<ResumePDF info={info} education={education} work={work} />}
          fileName={`${info.name}_CV.pdf`}
          className="no-print rounded bg-[#2C3E50] px-4 py-2 text-white hover:bg-[#1A252F]"
        >
          {({ loading }) => (loading ? "Generating PDF..." : "Download CV")}
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default App;
