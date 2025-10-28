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
  isFormShowing,
  setIsFormShowing,
}) {
  return (
    <form
      action=""
      className={`${isFormShowing ? "block" : "hidden"} no-print mx-auto w-full max-w-[600px] rounded bg-[#414040] p-4 xl:block`}
    >
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
      <button
        className="mt-4 rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-800 xl:hidden"
        onClick={(e) => {
          e.preventDefault();
          setIsFormShowing(false);
        }}
      >
        Preview
      </button>
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
