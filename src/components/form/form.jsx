import Experience from "./education";
import Header from "./generalInfo";
import Work from "./work";

export default function Form({
  info,
  setInfo,
  education,
  setEducation,
  work,
  setWork,
}) {
  return (
    <form action="">
      <Header info={info} setInfo={setInfo} />
      <hr />

      <Experience
        education={education}
        setEducation={setEducation}
        handleReplacement={handleReplacement}
      />

      <Work
        work={work}
        setWork={setWork}
        handleReplacement={handleReplacement}
      />
    </form>
  );
}

function handleReplacement(typeField, index, e, state, stateSetter) {
  const map = state.map((el, i) => {
    if (i === index) {
      return { ...el, [typeField]: e };
    } else {
      return el;
    }
  });
  stateSetter(map);
  return;
}
