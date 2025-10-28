import { Input } from "@/components/ui/input";
import { ListPlus, ListX } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Education({
  education,
  setEducation,
  handleReplacement,
}) {
  return (
    <fieldset className="mt-2">
      <div className="flex items-center justify-between">
        <legend className="text-xl font-bold">Educational Background</legend>
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
                  <SelectItem value="secondary">High School Cert</SelectItem>
                  <SelectItem value="Tertiary">Bachelors (B.Sc)</SelectItem>
                  <SelectItem value="Masters">Masters (M.Sc)</SelectItem>
                  <SelectItem value="Doctorate">Doctorate (Ph.D)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </label>

          <label className="flex flex-col md:grid md:grid-cols-[130px_1fr]">
            <p className="text-base font-semibold">Date of study:</p>
            <Input
              type="month"
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
  );
}
