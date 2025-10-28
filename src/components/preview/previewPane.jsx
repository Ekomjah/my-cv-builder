import { Mail, Link2, Phone, MapPin } from "lucide-react";
export default function Preview({ info, education, work }) {
  const { name, email, jobTitle, tel, img, location, portfolio } = info;
  return (
    <div className="min-h-1/2 rounded bg-white p-8 text-[#2C3E50]">
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
            <h1 className="font-bold">{name}</h1>
            <p className="text-lg font-semibold">{jobTitle}</p>
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
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start gap-2 border-r border-[#2C3E50] p-2">
          <h2 className="text-lg font-bold">Education/Skills: </h2>
          {education.school !== "" &&
            education.map(({ school, subject, course, startDate }) => (
              <div>
                <div className="flex gap-1">
                  <p className="max-w-[190px] text-base font-medium">
                    {subject}
                  </p>
                  <p className="max-w-[190px] text-base font-medium">
                    ({course})
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="max-w-[190px] text-base font-bold">
                    {school}
                  </h2>
                  <p className="text-base font-semibold"> -{startDate}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex">
          {work.map(({ company, position, description, from, till }) => (
            <div>
              <h2 className="text-base font-bold">{company}</h2>
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
      </div>
    </div>
  );
}
