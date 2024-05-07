import Person from "../../interfaces/Person";

export function PeopleRenderer({
  firstName,
  lastName,
  birthday,
  eyeColor,
}: Person) {
  return (
    <div className="whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
      <div className="mb-2 flex items-center gap-3">
        <a
          href="#"
          className="block font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors hover:text-pink-500"
        >
          {firstName} {lastName}
        </a>
      </div>
      <div className="mt-4 flex items-center gap-5">
        <div className="flex items-center gap-1">
          👁️
          <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
            Has {eyeColor} eyes
          </p>
        </div>

        <div className="flex items-center gap-1">
          🎂
          <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
            Birthday :{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }).format(birthday)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PeopleRenderer;
