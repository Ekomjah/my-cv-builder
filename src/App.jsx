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
    img: null,
  });

  const [education, setEducation] = useState([
    {
      id: 0,
      school: "",
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
    <div className="grid grid-cols-[1fr_3fr] items-center justify-around">
      <Form
        info={info}
        setInfo={setInfo}
        education={education}
        setEducation={setEducation}
        work={work}
        setWork={setWork}
      />
      <Preview />
    </div>
  );
}

export default App;
