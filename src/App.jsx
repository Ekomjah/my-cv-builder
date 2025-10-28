import { useState } from "react";
import "./App.css";
import Form from "./components/form/form";

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
    <div className="mx-auto w-full max-w-[600px] rounded bg-[#414040] p-4">
      <Form
        info={info}
        setInfo={setInfo}
        education={education}
        setEducation={setEducation}
        work={work}
        setWork={setWork}
      />
    </div>
  );
}

export default App;
