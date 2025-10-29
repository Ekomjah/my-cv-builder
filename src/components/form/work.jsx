import { ListPlus, ListX, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Work({ work, setWork, handleReplacement }) {
  return (
    <fieldset className="mt-2">
      <div className="flex items-center justify-between">
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
      {work.map(({ id, company, position, description, from, till }) => (
        <div key={id}>
          <div className="mt-2 flex justify-end">
            <button
              className="bg-red-500"
              onClick={(e) => {
                e.preventDefault();
                id > 0 && setWork((prev) => prev.filter((el) => el.id !== id));
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
                handleReplacement("company", id, e.target.value, work, setWork);
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
                  id,
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
                    id,
                    e.target.value,
                    work,
                    setWork,
                  );
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
                type="month"
                value={from}
                onChange={(e) => {
                  e.preventDefault();
                  handleReplacement("from", id, e.target.value, work, setWork);
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
                type="month"
                value={till}
                onChange={(e) => {
                  e.preventDefault();
                  handleReplacement("till", id, e.target.value, work, setWork);
                }}
              />
            </label>
          </div>
          <hr />
        </div>
      ))}
    </fieldset>
  );
}
