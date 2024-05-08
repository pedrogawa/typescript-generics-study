import Widget from "../../interfaces/Widget";
export function WidgetRenderer({
  isSpecialCard,
  title,
  description,
  id,
  rating,
  created,
  updated,
}: Widget) {
  return (
    <div className="whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
      <div className="mb-2 flex items-center gap-3">
        <a
          href="#"
          className="block font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors hover:text-pink-500"
        >
          {title || "No title"}
        </a>
        {isSpecialCard && (
          <div className="center relative inline-block select-none whitespace-nowrap rounded-full bg-purple-500 py-1 px-2 align-baseline font-sans text-xs font-medium capitalize leading-none tracking-wide text-white">
            <div className="mt-px">Special</div>
          </div>
        )}
      </div>
      <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
        {description}
      </p>
      <div className="mt-4 flex items-center gap-5">
        <div className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full bg-blue-400"></span>
          <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
            #{id}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="-mt-0.5 h-4 w-4 text-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
            {rating}/10
          </p>
        </div>
        <div className="flex items-center gap-1">
          <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
            Created:{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }).format(created)}
          </p>
          <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
            Updated:{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }).format(updated)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WidgetRenderer;
