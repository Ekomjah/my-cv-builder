import { useState, useEffect } from "react";
import "./App.css";
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
  const [datePickerStates, setDatePickerStates] = useState({
    education: false,
    startDate: false,
    endDate: false,
  });
  const [date, setDate] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
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

  function handleReplacement(typeField, index, e, state) {
    const map = state.map((el, i) => {
      if (i === index) {
        return { ...el, [typeField]: e };
      } else {
        return e;
      }
    });
    setEducation(map);
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
              }}
            >
              Add field
            </button>
          </div>
          {education.map(({ id, school, course, startDate }, i) => (
            <div key={id} className="mt-3">
              <button
                style={{ textAlign: "right" }}
                className="bg-red-500"
                onClick={(e) => {
                  e.preventDefault();
                  id > 1 &&
                    setEducation((prev) => prev.filter((el) => el.id !== id));
                  console.log(education);
                }}
              >
                Remove field
              </button>
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
                    handleReplacement("school", i, e.target.value, education)
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
                    handleReplacement("course", i, e, education);
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
                <input
                  type="date"
                  id={`date-${id}`}
                  value={
                    education[i].startDate
                      ? education[i].startDate.toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) => {
                    const date = e.target.value
                      ? new Date(e.target.value)
                      : null;
                    setEducation((prev) =>
                      prev.map((el) =>
                        el.id === id ? { ...el, startDate: date } : el,
                      ),
                    );
                  }}
                  className="rounded-md border border-gray-400 bg-[#171717] px-3 py-2 text-sm outline-none focus:border-gray-500"
                />
              </label>
            </div>
          ))}
        </fieldset>
        <hr className="mt-4" />
        <fieldset className="mt-2">
          <legend className="text-xl font-bold">Experience</legend>

          <label
            htmlFor=""
            className="mt-3 flex flex-col md:grid md:grid-cols-[130px_1fr]"
          >
            <p className="font-semibold">Company Name:</p>
            <Input placeholder="Amazon" className="border border-gray-400" />
          </label>

          <label
            htmlFor=""
            className="mt-3 flex flex-col md:grid md:grid-cols-[130px_1fr]"
          >
            <p className="font-semibold">Position:</p>
            <Input
              placeholder="Software Engineer"
              className="border border-gray-400"
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
                placeholder="Code refactoring and bug fixing..."
                id="message-2"
              />
              <p className="text-muted-foreground text-sm">
                Word Count: <b>0/ 500</b> words.
              </p>
            </div>
          </label>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <label className="flex flex-col gap-2 sm:flex-row">
              <Label
                htmlFor="start-date"
                className="text-base font-semibold whitespace-nowrap"
              >
                From:
              </Label>
              <Popover
                open={datePickerStates.startDate}
                onOpenChange={(open) =>
                  setDatePickerStates((prev) => ({ ...prev, startDate: open }))
                }
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="start-date"
                    className="justify-between font-normal"
                  >
                    {startDate ? startDate.toLocaleDateString() : "Select date"}
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={startDate}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setStartDate(date);
                      setDatePickerStates((prev) => ({
                        ...prev,
                        startDate: false,
                      }));
                    }}
                  />
                </PopoverContent>
              </Popover>
            </label>
            <label className="flex flex-col gap-2 sm:flex-row">
              <Label
                htmlFor="end-date"
                className="text-base font-semibold whitespace-nowrap"
              >
                till:
              </Label>
              <Popover
                open={datePickerStates.endDate}
                onOpenChange={(open) =>
                  setDatePickerStates((prev) => ({ ...prev, endDate: open }))
                }
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="end-date"
                    className="justify-between font-normal"
                  >
                    {endDate ? endDate.toLocaleDateString() : "Select date"}
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={endDate}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setEndDate(date);
                      setDatePickerStates((prev) => ({
                        ...prev,
                        endDate: false,
                      }));
                    }}
                  />
                </PopoverContent>
              </Popover>
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
