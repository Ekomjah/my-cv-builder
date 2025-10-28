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
    {
      id: 0,
      school: "",
      subject: "",
      course: "",
      startDate: "",
    },
  ]);
  const [work, setWork] = useState([
    {
      id: 0,
      company: "",
      position: "",
      description: "",
      from: "",
      till: "",
    },
  ]);
  const [isFormShowing, setIsFormShowing] = useState(true);
  document.documentElement.classList.add("dark");

  return (
    <div className="items-center justify-around gap-3 xl:grid xl:grid-cols-[1fr_3fr]">
      <Form
        info={info}
        setInfo={setInfo}
        education={education}
        setEducation={setEducation}
        work={work}
        setWork={setWork}
        isFormShowing={isFormShowing}
        setIsFormShowing={setIsFormShowing}
      />
      <div>
        <Preview
          info={info}
          education={education}
          work={work}
          isFormShowing={isFormShowing}
          setIsFormShowing={setIsFormShowing}
        />
      </div>
      <div className="flex justify-center gap-4 pt-4">
        {!isFormShowing && (
          <div>
            <button
              className="no-print rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700"
              onClick={() => {
                window.print();
              }}
            >
              Print Me{" "}
            </button>
            <button
              className="no-print bg-purple-500 hover:bg-purple-700 xl:hidden"
              onClick={() => setIsFormShowing(true)}
            >
              Continue Editing
            </button>
          </div>
        )}
        <PDFDownloadLink
          document={<ResumePDF info={info} education={education} work={work} />}
          fileName={`${info.name}_CV.pdf`}
          className="no-print rounded bg-[#2C3E50] px-4 py-2 text-center text-white hover:bg-[#1A252F]"
        >
          {({ loading }) => (loading ? "Generating PDF..." : "Download CV")}
        </PDFDownloadLink>
      </div>

      <button
        className="no-print hidden rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700 xl:block"
        onClick={() => {
          window.print();
        }}
      >
        Print Me{" "}
      </button>
    </div>
  );
}

export default App;
