// export

function PascalToSnake(word) {
  let word = word
    .split(/(?=[A-Z])/)
    .join("_")
    .toLowerCase();
  return renderPascal;
}

const Pascal2Snake = (s) => {
  if (typeof s === "number") {
    return s.toString();
  }
  let tmp = "";

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (letter.toUppercase() === letter) {
      if (i === 0) {
        tmp += letter.toLowerCase();
      } else {
        tmp += "_" + letter.toLowerCase();
      }
    } else {
      tmp += letter;
    }
  }
};

export default pascal2snake;
