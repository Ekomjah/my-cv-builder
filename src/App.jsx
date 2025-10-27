import { useState, useEffect } from "react";
import "./App.css";
import { ListPlus, ListX } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    jobTitle: "",
    tel: "",
  });

  const [education, setEducation] = useState([
    {
      id: 0,
      school: "",
      course: "",
      startDate: null,
    },
  ]);
  const [work, setWork] = useState([
    {
      id: 0,
      company: "",
      position: "",
      description: "",
      from: null,
      till: null,
    },
  ]);

  document.documentElement.classList.add("dark");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  function handleReplacement(typeField, index, e, state, stateSetter) {
    const map = state.map((el, i) => {
      if (i === index) {
        return { ...el, [typeField]: e };
      } else {
        return el;
      }
    });
    stateSetter(map);
    return education;
  }

  function toggle() {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
  return (
    <div className="mx-auto w-full max-w-[600px] rounded bg-[#414040] p-4">
      <form action="">
        <fieldset>
          <div className="flex items-center justify-between">
            <legend className="mb-1 text-xl font-bold">
              General Information
            </legend>
            <button
              className="bg-red-500"
              onClick={(e) => {
                e.preventDefault();
                setInfo({
                  name: "",
                  email: "",
                  jobTitle: "",
                  tel: "",
                });
              }}
            >
              Clear field
            </button>
          </div>
          <hr />
          <label
            htmlFor="name"
            className="my-3 flex flex-col md:grid md:grid-cols-[130px_1fr]"
          >
            <p className="font-semibold">Name: </p>
            <Input
              value={info.name}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              id="name"
              placeholder="John Doe"
              className="rounded border border-gray-400 px-2 py-1 outline-0"
            />
          </label>
          <label
            htmlFor="email"
            className="mb-4 flex flex-col md:grid md:grid-cols-[130px_1fr]"
          >
            <p className="font-semibold">Email: </p>
            <Input
              value={info.email}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
              id="email"
              placeholder="example@email.com"
              className="rounded border border-gray-400 px-2 py-1 outline-0"
            />
          </label>
          <label
            htmlFor="title"
            className="mb-4 flex flex-col md:grid md:grid-cols-[130px_1fr]"
          >
            <p className="font-semibold">Job Title: </p>
            <Input
              value={info.jobTitle}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, jobTitle: e.target.value }))
              }
              type="text"
              id="title"
              placeholder="Front-end Developer"
              className="rounded border border-gray-400 px-2 py-1 outline-0"
            />
          </label>
          <label
            className="mb-7 flex flex-col md:grid md:grid-cols-[130px_1fr]"
            htmlFor="phone"
          >
            <p className="font-semibold">Telephone: </p>
            <Input
              value={info.tel}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, tel: e.target.value }))
              }
              type="tel"
              id="phone"
              placeholder="+(555)-(555)-(5555)"
              className="rounded border border-gray-400 px-2 py-1 outline-0"
            />
            <p>{info.tel}</p>
          </label>
        </fieldset>
        <hr />

        <fieldset className="mt-2">
          <div className="flex items-center justify-between">
            <legend className="text-xl font-bold">
              Educational Background
            </legend>
            <button
              className="bg-green-500"
              onClick={(e) => {
                e.preventDefault();
                setEducation((prev) => [
                  ...prev,

                  {
                    id: education.length,
                    school: "",
                    course: "",
                    startDate: null,
                  },
                ]);
                console.log(education);
              }}
            >
              <ListPlus />
            </button>
          </div>
          {education.map(({ id, school, course, startDate }, i) => (
            <div key={id} className="mt-3">
              <div className="flex justify-end">
                <button
                  className="bg-red-500"
                  onClick={(e) => {
                    e.preventDefault();
                    id > 0 &&
                      setEducation((prev) => prev.filter((el) => el.id !== id));
                    console.log(education);
                  }}
                >
                  <ListX />
                </button>
              </div>
              <label
                htmlFor={`school-${id}`}
                className="my-2 flex flex-col md:grid md:grid-cols-[130px_1fr]"
              >
                <p className="font-semibold">School:</p>
                <Input
                  type="text"
                  id={`school-${id}`}
                  placeholder="University of Example"
                  className="rounded-sm border border-gray-400 bg-[#171717] px-2 py-1 outline-0"
                  value={school}
                  onChange={(e) =>
                    handleReplacement(
                      "school",
                      i,
                      e.target.value,
                      education,
                      setEducation,
                    )
                  }
                />
              </label>
              <label
                htmlFor=""
                className="mb-2 flex flex-col md:grid md:grid-cols-[130px_1fr]"
              >
                <p className="mb-2 font-semibold">Qualification acquired: </p>
                <Select
                  className="border-gray-400 outline-0"
                  value={course}
                  onValueChange={(e) => {
                    handleReplacement("course", i, e, education, setEducation);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a certification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Qualifications</SelectLabel>
                      <SelectItem value="secondary">
                        High School Cert
                      </SelectItem>
                      <SelectItem value="Tertiary">Bachelors (B.Sc)</SelectItem>
                      <SelectItem value="Masters">Masters (M.Sc)</SelectItem>
                      <SelectItem value="Doctorate">
                        Doctorate (Ph.D)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </label>

              <label className="flex flex-col md:grid md:grid-cols-[130px_1fr]">
                <p className="text-base font-semibold">Date of study:</p>
                <Input
                  type="date"
                  id={`date-${id}`}
                  value={startDate}
                  onChange={(e) => {
                    handleReplacement(
                      "startDate",
                      i,
                      e.target.value,
                      education,
                      setEducation,
                    );
                    console.log(e.target.value);
                  }}
                  className="rounded-md border border-gray-400 bg-[#171717] px-3 py-2 text-sm outline-none focus:border-gray-500"
                />
              </label>
              <hr className="mt-4" />
            </div>
          ))}
        </fieldset>
        <fieldset className="mt-2">
          <div class="flex items-center justify-between">
            <legend className="text-xl font-bold">Experience</legend>
            <button
              className="bg-green-500"
              onClick={(e) => {
                e.preventDefault();
                setWork((prev) => [
                  ...prev,

                  {
                    id: work.length,
                    company: "",
                    position: "",
                    description: "",
                    from: null,
                    till: null,
                  },
                ]);
              }}
            >
              <ListPlus />
            </button>
          </div>
          {work.map(({ id, company, position, description, from, till }, i) => (
            <div key={id}>
              <div className="mt-2 flex justify-end">
                <button
                  className="bg-red-500"
                  onClick={(e) => {
                    e.preventDefault();
                    id > 0 &&
                      setWork((prev) => prev.filter((el) => el.id !== id));
                    console.log(work);
                  }}
                >
                  <ListX />
                </button>
              </div>
              <label
                htmlFor=""
                className="mt-3 flex flex-col md:grid md:grid-cols-[130px_1fr]"
              >
                <p className="font-semibold">Company Name:</p>
                <Input
                  placeholder="Amazon"
                  className="border border-gray-400"
                  value={company}
                  onChange={(e) => {
                    e.preventDefault();
                    handleReplacement(
                      "company",
                      i,
                      e.target.value,
                      work,
                      setWork,
                    );
                  }}
                />
              </label>

              <label
                htmlFor=""
                className="mt-3 flex flex-col md:grid md:grid-cols-[130px_1fr]"
              >
                <p className="font-semibold">Position:</p>
                <Input
                  placeholder="Software Engineer"
                  className="border border-gray-400"
                  value={position}
                  onChange={(e) => {
                    e.preventDefault();
                    handleReplacement(
                      "position",
                      i,
                      e.target.value,
                      work,
                      setWork,
                    );
                  }}
                />
              </label>
              <label
                htmlFor=""
                className="mt-3 flex flex-col md:grid md:grid-cols-[130px_1fr]"
              >
                <Label htmlFor="message-2" className="text-base font-semibold">
                  Job Description:
                </Label>
                <div>
                  <Textarea
                    maxLength={500}
                    placeholder="Code refactoring and bug fixing..."
                    id="message-2"
                    value={description}
                    onChange={(e) => {
                      e.preventDefault();
                      handleReplacement(
                        "description",
                        i,
                        e.target.value,
                        work,
                        setWork,
                      );
                      console.log(work);
                    }}
                  />
                  <p className="text-muted-foreground text-sm">
                    Word Count: <b>{description.length}/500</b> characters.
                  </p>
                </div>
              </label>

              <div className="my-2 flex flex-col gap-3 sm:flex-row sm:justify-between">
                <label className="flex flex-col gap-2 sm:flex-row">
                  <Label
                    htmlFor="start-date"
                    className="text-base font-semibold whitespace-nowrap"
                  >
                    From:
                  </Label>

                  <Input
                    type="date"
                    value={from}
                    onChange={(e) => {
                      e.preventDefault();
                      handleReplacement(
                        "from",
                        i,
                        e.target.value,
                        work,
                        setWork,
                      );
                      console.log(work);
                    }}
                  />
                </label>
                <label className="flex flex-col gap-2 sm:flex-row">
                  <Label
                    htmlFor="end-date"
                    className="text-base font-semibold whitespace-nowrap"
                  >
                    till:
                  </Label>

                  <Input
                    type="date"
                    value={till}
                    onChange={(e) => {
                      e.preventDefault();
                      handleReplacement(
                        "till",
                        i,
                        e.target.value,
                        work,
                        setWork,
                      );
                      console.log(work[id].till);
                    }}
                  />
                </label>
              </div>
              <hr />
            </div>
          ))}
        </fieldset>
      </form>
    </div>
  );
}

export default App;
