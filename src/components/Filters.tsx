import Widget from "../interfaces/Widget";
import Person from "../interfaces/Person";
import Filter from "../interfaces/Filter";

export interface FiltersProps<T> {
  object: T;
  properties: Array<Filter<T>>;
  onChangeFilter: (property: Filter<T>) => void;
}

export function Filters<T extends Widget | Person>({
  object,
  properties,
  onChangeFilter,
}: FiltersProps<T>) {
  return (
    <div className="flex flex-col">
      <label className="mt-3">Try us too!</label>
      <div>
        {Object.keys(object).map((key) => {
          return (
            <div>
              <div className="inline-flex items-center" id={key}>
                {key} is truthy
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor={key}
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id={`${key}-true`}
                    onChange={() =>
                      onChangeFilter({
                        property: key as any,
                        isTruthySelected: true,
                      })
                    }
                    checked={properties.some(
                      (property) =>
                        property.property === key && property.isTruthySelected,
                    )}
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
              <div className="inline-flex items-center" id={key}>
                {key} is falsy
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor={key}
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id={`${key}-false`}
                    onChange={() =>
                      onChangeFilter({
                        property: key as any,
                        isTruthySelected: false,
                      })
                    }
                    checked={properties.some(
                      (property) =>
                        property.property === key && !property.isTruthySelected,
                    )}
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filters;
