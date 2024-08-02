export const deHyphenate = (str: string) => str.replace(/-/g, " ");

export const deCamelCase = (str: string) => {
  return str
    .split(/(?=[A-Z])/)
    .join(" ")
    .replace(/-/g, " ");
};