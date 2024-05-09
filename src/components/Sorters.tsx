import { ReactNode, useState } from "react";
import genericSort from "../utils/genericSort";
import Person from "../interfaces/Person";
import Property from "../interfaces/Property";
import Widget from "../interfaces/Widget";

type PropsWithChildrenFunction<P, T> = P & { children?(item: T): ReactNode };

interface SortersProps<T extends Person | Widget> {
  data: Array<T>;
  initialSortProperty: keyof T;
}

export function Sorters<T extends Person | Widget>({
  data,
  initialSortProperty,
  children,
}: PropsWithChildrenFunction<SortersProps<T>, T>) {
  const [sortProperty, setSortProperty] = useState<Property<T>>({
    property: initialSortProperty,
    isDescending: true,
  });

  const object = data.length > 0 ? data[0] : {};
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
        onChange={(event) => {
          const values = event.target.value.split("-");
          setSortProperty({
            property: values[0] as any,
            isDescending: values[1] === "true",
          });
        }}
      >
        {Object.keys(object).map((key) => {
          return (
            <>
              <option key={`${key}-true`} value={`${key}-true`}>
                Sort by: '{key}' descending!
              </option>
              <option key={`${key}-false`} value={`${key}-false`}>
                Sort by: '{key}' ascending!
              </option>
            </>
          );
        })}
      </select>
      {children &&
        data
          .sort((a, b) => genericSort(a, b, sortProperty))
          .map((widget) => children(widget))}
    </div>
  );
}

export default Sorters;
