import { Mail, Link2, Phone, MapPin, BriefcaseBusiness } from "lucide-react";

export default function Preview({ info, education, work }) {
  const { name, email, jobTitle, tel, img, location, portfolio } = info;
  const date = new Date();

  return (
    <div
      id="resume-preview"
      className={`print min-h-1/2 rounded bg-white p-8 text-[#2C3E50]`}
    >
      <div className="mb-4 flex items-center justify-between border-b-2 border-[#2C3E50] pb-4">
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
            <h1 className="text-xl font-bold">{name}</h1>
            {jobTitle !== "" && (
              <div className="mt-4 flex items-center gap-2">
                <BriefcaseBusiness />
                <p className="text-lg font-semibold">{jobTitle}</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1">
            <Mail />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="flex items-center gap-1">
            <Phone />
            <p>{tel}</p>
          </div>
          <div className="flex items-center gap-1">
            <MapPin />
            <p>{location}</p>
          </div>
          <div className="flex items-center gap-1">
            <Link2 />
            <a href={`https://${portfolio}`} target="_blank">
              {portfolio}
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_2fr]">
        <div className="m-0 flex flex-col items-start gap-y-2 border-r border-[#2C3E50] px-0 py-2">
          <h2 className="text-lg font-bold">Education/Skills: </h2>
          <ul className="list-disc">
            {education.school !== "" &&
              education.map(({ id, school, subject, course, startDate }) => (
                <li className="mt-2 w-70 wrap-break-word" key={id}>
                  <div className="flex flex-wrap items-center gap-x-2">
                    <p className="text-base font-medium">{subject}</p>
                    {course !== "" && (
                      <p className="text-base font-medium">({course})</p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-1">
                    <h2 className="max-w-60 text-base font-bold">{school}</h2>
                    {startDate !== "" && (
                      <p className="text-base font-semibold"> -{startDate}</p>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <ul className="bold-list flex list-decimal flex-col gap-6 pl-7">
          {work.map(({ id, company, position, description, from, till }) => (
            <li key={id}>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">{company}</h2>

                <div className="flex justify-end gap-2">
                  <p className="font-medium">
                    {from !== "" ? from : date.toLocaleDateString()} -
                  </p>
                  <p className="font-medium">
                    {till !== "" ? till : "Present"}
                  </p>
                </div>
              </div>

              <h2 className="text-base font-semibold">{position}</h2>
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
