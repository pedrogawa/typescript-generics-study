import Property from "../interfaces/Property";

export default function genericSort<T>(a: T, b: T, property: Property<T>) {
  const result = () => {
    if (a[property.property] > b[property.property]) {
      return 1;
    }

    if (a[property.property] < b[property.property]) {
      return -1;
    }

    return 0;
  };

  return property.isDescending ? result() * -1 : result();
}
