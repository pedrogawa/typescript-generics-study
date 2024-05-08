export default function genericFilter<T>(
  object: T,
  filterProperties: Array<keyof T>,
): boolean {
  return filterProperties.every((property) => {
    return object[property] ? true : false;
  });
}
