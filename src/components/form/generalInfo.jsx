import { Trash } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Head({ info, setInfo }) {
  const handleImg = (e) => {
    const imgSrc = e.target.files[0];
    if (imgSrc) {
      const imageUrl = URL.createObjectURL(imgSrc);
      setInfo((prev) => ({ ...prev, img: imageUrl }));
    }
  };
  return (
    <fieldset>
      <div className="flex items-center justify-between">
        <legend className="mb-1 text-xl font-bold">General Information</legend>
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
          <Trash />
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

      <label
        className="mb-7 flex flex-col md:grid md:grid-cols-[130px_1fr]"
        htmlFor="img"
      >
        <p className="font-semibold">Attach passport: </p>
        <Input
          onChange={(e) => handleImg(e)}
          accept="image/*"
          type="file"
          id="phone"
          placeholder="+(555)-(555)-(5555)"
          className="rounded border border-gray-400 px-2 py-1 outline-0"
        />
        <p>{info.tel}</p>
      </label>

      {info.img && (
        <div>
          <p>Preview:</p>
          <img
            src={info.img}
            alt="preview"
            style={{ width: "200px", height: "auto", borderRadius: "8px" }}
          />
        </div>
      )}
    </fieldset>
  );
}
