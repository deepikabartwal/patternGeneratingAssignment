const repeatCharacter = function(lineLength, character) {
  let text = "";
  for (let start = 1; start <= lineLength; start++) {
    text += character;
  }
  return text;
}

const repeatSpacedChars = function(lineLength, firstChar, middleChar, lastChar) {
  let text = firstChar;
  for (let start = 1; start <= lineLength - 2; start++) {
    text += middleChar;
  }
  text += lastChar;
  if (lineLength == 1) {
    text = "*";
  }
  return text;
}

const upperHalfDiamond = function(lineLength, firstChar, middleChar, lastChar) {
  let pattern = "";
  for (let row = 1; row <= Math.ceil(lineLength / 2); row++) {
    let count = 2 * row - 1;
    let spaces = repeatCharacter((lineLength - count) / 2, " ");
    pattern += spaces + repeatSpacedChars(count, firstChar, middleChar, lastChar) + spaces + "\n";
  }
  return pattern;
}

const lowerHalfDiamond = function(lineLength, firstChar, middleChar, lastChar) {
  let pattern = "";
  for (let row = Math.ceil(lineLength / 2) - 1; row > 0; row--) {
    let count = 2 * row - 1;
    let spaces = repeatCharacter((lineLength - count) / 2, " ");
    pattern += spaces + repeatSpacedChars(count, firstChar, middleChar, lastChar) + spaces + "\n";
  }
  return pattern;
}

const filledDiamond = function(lineLength) {
  let pattern = "";
  pattern += upperHalfDiamond(lineLength, "*", "*", "*");
  pattern += lowerHalfDiamond(lineLength, "*", "*", "*");
  return pattern;
}

const hollowDiamond = function(lineLength) {
  let pattern = "";
  pattern += upperHalfDiamond(lineLength, "*", " ", "*");
  pattern += lowerHalfDiamond(lineLength, "*", " ", "*");
  return pattern;
}

const angledHollowDiamond = function(lineLength) {
  let pattern = "";
  for (let row = 1; row < Math.ceil(lineLength / 2); row++) {
    count = 2 * row - 1;
    spaces = repeatCharacter((lineLength - count) / 2, " ");
    pattern += spaces + repeatSpacedChars(count, "/", " ", "\\") + spaces + "\n";
  }
  pattern += repeatSpacedChars(lineLength, "*", " ", "*") + "\n";
  pattern += lowerHalfDiamond(lineLength, "\\", " ", "/");
  return pattern;
}

const main = function(){
  let shape = process.argv[2];
  let lineLength = +process.argv[3];
  lineLength = lineLength % 2 == 0 ? lineLength - 1 : lineLength;

  if (shape == "filled") {
    console.log(filledDiamond(lineLength));
  } else if (shape == "hollow") {
    console.log(hollowDiamond(lineLength));
  } else {
    console.log(angledHollowDiamond(lineLength));
  }
}

main();
