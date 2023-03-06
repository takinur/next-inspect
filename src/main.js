const orginalArrary = [
  "OR",
  ["<", "a", "b"],
  ["AND", ["==", "c", "d"], ["!=", "e", "f"]],
];
const convertToString = (orginalArrary) => {
  if (!Array.isArray(orginalArrary)) return orginalArrary;
  const operator = orginalArrary[0].toLowerCase();
  const operands = orginalArrary.slice(1).map(convertToString);
  if (operator === "or" && operands.length > 1) {
    return `${operands[0]} < ${operands[1]} OR (${operands[2]} == ${operands[3]} AND ${operands[4]} != ${operands[5]})`;
  } else if (operator === "and" && operands.length > 1) {
    return `${operands[0]} == ${operands[1]} AND ${operands[2]} != ${operands[3]}`;
  }
};

console.log(convertToString(orginalArrary)); // "a < b OR (c == d AND e != f)"

const arr = [
  "OR",
  ["<", "a", "b"],
  ["AND", ["==", "c", "d"], ["!=", "e", "f"]],
];
const convertToString = (arr) => {
  if (!Array.isArray(arr)) return arr;
  const operator = arr[0].toLowerCase();
  const operands = arr.slice(1).map(convertToString);
  if (operator === "or" && operands.length > 1) {
    return `${operands[0]} < ${operands[1]} OR (${operands[2]} == ${operands[3]} AND ${operands[4]} != ${operands[5]})`;
  } else if (operator === "and" && operands.length > 1) {
    return `${operands[0]} == ${operands[1]} AND ${operands[2]} != ${operands[3]}`;
  }
};

console.log(convertToString(arr)); // "a < b OR (c == d AND e != f)"
