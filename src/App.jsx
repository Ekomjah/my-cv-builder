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

  document.documentElement.classList.add("dark");

  return (
    <div className="grid grid-cols-[1fr_3fr] items-center justify-around gap-3">
      <Form
        info={info}
        setInfo={setInfo}
        education={education}
        setEducation={setEducation}
        work={work}
        setWork={setWork}
      />
      <div>
        <Preview info={info} education={education} work={work} />

        <PDFDownloadLink
          document={<ResumePDF info={info} education={education} work={work} />}
          fileName={`${info.name}_CV.pdf`}
          className="rounded bg-[#2C3E50] px-4 py-2 text-white hover:bg-[#1A252F]"
        >
          {({ loading }) => (loading ? "Generating PDF..." : "Download CV")}
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default App;
