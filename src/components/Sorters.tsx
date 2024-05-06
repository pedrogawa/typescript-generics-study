import Person from "../interfaces/Person";
import Widget from "../interfaces/Widget";

interface SortersProps<T extends Person | Widget> {
  object: T;
  setProperty: (property: keyof T) => void;
}

export function Sorters<T extends Person | Widget>({
  object,
  setProperty,
}: SortersProps<T>) {
  return (
    <div className="max-w-2xl">
      <label
        htmlFor="sorters"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Sorters! Try us too!
      </label>
      <select
        id="sorters"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(event) => setProperty(event.target.value as any)}
      >
        {Object.keys(object).map((key) => {
          return (
            <option key={key} value={key}>
              Sort by: '{key}'
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Sorters;
