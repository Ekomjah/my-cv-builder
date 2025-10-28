import { useState } from "react";
import "./App.css";
import Form from "./components/form/form";
import Preview from "./components/preview/previewPane";

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
      <Preview info={info} education={education} work={work} />
    </div>
  );
}

export default App;
