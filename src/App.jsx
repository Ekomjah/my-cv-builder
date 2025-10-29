import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form/form";
import Preview from "./components/preview/previewPane";
function App() {
  const getLocalData = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  };

  const [info, setInfo] = useState(() =>
    getLocalData("info", {
      name: "",
      email: "",
      jobTitle: "",
      tel: "",
      img: "",
      location: "",
      portfolio: "",
    }),
  );

  const [education, setEducation] = useState(() =>
    getLocalData("education", [
      { id: 0, school: "", subject: "", course: "", startDate: "" },
    ]),
  );

  const [work, setWork] = useState(() =>
    getLocalData("work", [
      { id: 0, company: "", position: "", description: "", from: "", till: "" },
    ]),
  );

  const [isFormShowing, setIsFormShowing] = useState(true);

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(info));
    localStorage.setItem("work", JSON.stringify(work));
    localStorage.setItem("education", JSON.stringify(education));
  }, [info, education, work]);
  document.documentElement.classList.add("dark");

  return (
    <div className="space-y-4 p-6">
      
      <div className="flex justify-end xl:hidden">
        <button
          onClick={() => setIsFormShowing(!isFormShowing)}
          className="no-print rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-800"
        >
          {isFormShowing ? "Show Preview" : "Show Form"}
        </button>
      </div>
      
      <div className="grid-layout-xl">
        <Form
          info={info}
          setInfo={setInfo}
          education={education}
          setEducation={setEducation}
          work={work}
          setWork={setWork}
        />
        <div className="preview-container">
          <Preview info={info} education={education} work={work} />
        </div>

        <button
          className="no-print rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700"
          onClick={() => window.print()}
        >
          Print Me
        </button>
      </div>

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

      <div className="flex flex-wrap justify-center gap-4">
        {!isFormShowing && (
          <>
            <button
              className="no-print rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700"
              onClick={() => window.print()}
            >
              Print Me
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
