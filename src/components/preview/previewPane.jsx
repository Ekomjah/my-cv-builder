import { Mail, Link2 } from "lucide-react";
export default function Preview({ info, education, work }) {
  const { name, email, jobTitle, tel, img, location, portfolio } = info;
  return (
    <div className="min-h-1/2 rounded bg-white p-4 text-[#2C3E50]">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {img && (
            <div className="flex items-center justify-center">
              <img
                src={img}
                alt="preview"
                className="h-32 w-32 rounded-full border-4 border-[#2C3E50] object-cover"
              />
            </div>
          )}
          <div className="flex flex-col items-center">
            <h1>{name}</h1>
            <p>{jobTitle}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1">
            <Mail size={20} color="#383dd6" strokeWidth={1} />
            <h2>{email}</h2>
          </div>
          <p>{tel}</p>
          <p>{location}</p>
          <div className="flex">
            <Link2 />
            <p>{portfolio}</p>
          </div>
        </div>
      </div>

      {education.map(({ id, school, course, startDate }) => (
        <div>
          <p>id-{id}</p>
          <h1>{school}</h1>
          <h2>{course}</h2>
          <p>{startDate}</p>
        </div>
      ))}

      {work.map(({ id, company, position, description, from, till }) => (
        <div>
          <p>id-{id}</p>
          <h1>{company}</h1>
          <h2>{position}</h2>
          <p>
            {description
              .split("\n")
              .filter((line) => line.trim() !== "")
              .map((el) => (
                <ul className="list-disc px-4">
                  <li>{el.trim()}</li>
                </ul>
              ))}
          </p>
          <p>{from}</p>
          <p>{till}</p>
        </div>
      ))}
    </div>
  );
}
