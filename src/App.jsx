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
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [education, setEducation] = useState([
    {
      id: 0,
      school: "",
      course: "",
      startDate: "",
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

  const toggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div className="mx-auto w-full max-w-[600px] rounded bg-[#414040] p-4">
      <form action="">
        <fieldset>
          <legend className="text-xl font-bold">General Information</legend>
          <label
            htmlFor="name"
            className="my-3 flex flex-col md:grid md:grid-cols-[130px_1fr]"
          >
            <p className="font-semibold">Name: </p>
            <Input
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
              type="tel"
              id="phone"
              placeholder="+(555)-(555)-(5555)"
              className="rounded border border-gray-400 px-2 py-1 outline-0"
            />
          </label>
        </fieldset>
        <hr />

        <fieldset className="mt-2">
          <legend className="text-xl font-bold">Educational Background</legend>
          {education.map(({ id, school, course, startDate }) => (
            <div key={id} className="mt-3">
              <label
                htmlFor={`school-${id}`}
                className="my-2 flex flex-col md:grid md:grid-cols-[130px_1fr]"
              >
                <p className="font-semibold">School: </p>
                <Input
                  type="text"
                  id={`school-${id}`}
                  placeholder="University of Example"
                  className="rounded-sm border border-gray-400 bg-[#171717] px-2 py-1 outline-0"
                  value={school}
                />
              </label>
              <label
                htmlFor=""
                className="mb-2 flex flex-col md:grid md:grid-cols-[130px_1fr]"
              >
                <p className="mb-2 font-semibold">Qualification acquired: </p>
                <Select className="border-gray-400 outline-0">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a certification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Qualifications</SelectLabel>
                      <SelectItem value="secondary">
                        High School Cert
                      </SelectItem>
                      <SelectItem value="tertiary">Bachelors (B.Sc)</SelectItem>
                      <SelectItem value="masters">Masters (M.Sc)</SelectItem>
                      <SelectItem value="doctors">Doctorate (Ph.D)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </label>

              <label className="flex flex-col md:grid md:grid-cols-[130px_1fr]">
                <Label htmlFor="date" className="text-base font-semibold">
                  Date of study:
                </Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date"
                      className="justify-between font-normal"
                    >
                      {date ? date.toLocaleDateString() : "Select date"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        setDate(date);
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
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

          <div className="mt-2 flex justify-between">
            <label className="flex gap-2">
              <Label htmlFor="date" className="text-base font-semibold">
                Start Date:
              </Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="justify-between font-normal"
                  >
                    {date ? date.toLocaleDateString() : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setDate(date);
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </label>

            <label className="flex gap-2">
              <Label htmlFor="date" className="text-base font-semibold">
                till:
              </Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="justify-between font-normal"
                  >
                    {date ? date.toLocaleDateString() : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setDate(date);
                      setOpen(false);
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
