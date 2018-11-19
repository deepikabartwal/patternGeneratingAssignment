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

const justifyWidth = function(width){
  let widthToUse = Math.ceil(width/2)*2 - 1;
  return widthToUse;
}

const generateDiamond = function(type,width){
  if(type == "filled"){
    return filledDiamond(justifyWidth(width));
  }
  if(type  == "hollow") {
    return hollowDiamond(justifyWidth(width));
  }
  return angledHollowDiamond(justifyWidth(width));
}

exports.generateDiamond = generateDiamond;

//const main = function(){
//  let type = process.argv[2];
//  let width = +process.argv[3];
//  console.log(generateDiamond(type,width));
//}
//main();

//const repeatCharacter = function(length,character){
//  let line = "";
//  for(let lengthIndex = 0; lengthIndex<length; lengthIndex++){
//    line = line + character;
//  }
//  return line;
//}

const lineGenerator = function(length,leftChar,midChar,rightChar){
  let rightBorderWidth = 1;
  let leftBorderWidth = 1;
  let midWidth = length-2;
  let left = repeatCharacter(leftBorderWidth,leftChar);
  let right = repeatCharacter(rightBorderWidth,rightChar);
  let mid = repeatCharacter(midWidth,midChar)
  return left+mid+right;
}

const filledRectangle = function(length,breadth){
  let filledRow = "";
  let delim="";
  for(breadthIndex=0;breadthIndex<breadth;breadthIndex++){
    filledRow=filledRow+delim+repeatCharacter(length,"*");
    delim="\n";
  }

  return filledRow;
}

const filledLine = function(limit){
  let line="";

  for(let index = 0; index<limit; index++){
    line=line+"*";
  }
  return line;
}

const lineWithStarAtEnds = function(limit){
  hollowLine="";

  for(let index = 0; index<limit; index++){
    if(index==0 || index==limit-1){
      hollowLine=hollowLine+"*";
    }else{
      hollowLine=hollowLine+" ";
    }
  }
  return hollowLine;
}

const emptyRectangle = function(length,breadth){
  let row = "";
  let delim = "";
  for(let breadthIndex=0; breadthIndex<breadth; breadthIndex++){
    if(breadthIndex==0 || breadthIndex==breadth-1){
      row = row+delim+filledLine(length);
    }else{
      row=row+delim+lineWithStarAtEnds(length);
    }
    delim="\n";
  }
  return row;
}

const dashline = function(limit){
  let dashline ="";
  for(let index=0; index<limit;index++){
    dashline = dashline+"-";
  }
  return dashline;
}

const starline = function(limit){
  let starline ="";
  for(let index=0; index<limit;index++){
    starline = starline+"*";
  }
  return starline;
}

const alternatingRectangle = function(length,breadth){
  row ="";
  delim ="";
  for(breadthIndex=0;breadthIndex<breadth;breadthIndex++){
    if(breadthIndex%2==0){
      row=row+delim+starline(length);
    }else{
      row=row+delim+dashline(length);
    }
    delim = "\n";
  }
  return row;
}

const generateRectangle = function(functionName,length,breadth){

  if(functionName=="filled"){
    return filledRectangle(length,breadth);
  }

  if(functionName=="empty"){
    return emptyRectangle(length,breadth);
  }

  if(functionName=="alternating"){
    return alternatingRectangle(length,breadth);
  }
}

exports.generateRectangle = generateRectangle;

//const main = function(){
//  let functionName = process.argv[2];
//  let length = +process.argv[3];
//  let breadth = +process.argv[4];
//  console.log(generateRectangle(functionName,length,breadth));
//}
//main();

const generateRow = function(length){
  row = "";
  for(let placeCount=1; placeCount<=length; placeCount++){
    row+="*";
  }
  return row;
}

const generateSpace = function(length){
  blankline="";
  for(let spaceCount=1; spaceCount<=length; spaceCount++){
    blankline+=" ";
  }
  return blankline;
}

const rightAlignedTriangle = function(length){
  triangle = "";
  delim = "";
  for(let rowCount=1; rowCount<=length; rowCount++){
    triangle=triangle+delim+generateSpace(length-rowCount)+generateRow(rowCount);
    delim = "\n";
  }
  return triangle;
}


const leftAlignedTriangle = function(length){
  triangle = "";
  delim = "";
  for(let rowCount=1; rowCount<=length; rowCount++){
    triangle=triangle+delim+generateRow(rowCount);
    delim = "\n";
  }
  return triangle;
}

const generateTriangle = function(triangleType,length){
if(triangleType=="left"){
  return leftAlignedTriangle(length);
}
if(triangleType=="right"){
  return rightAlignedTriangle(length);
}
}

exports.generateTriangle = generateTriangle;
//const main = function(){
//let triangleType= process.argv[2];
//let length = process.argv[3];
//  console.log(generateTriangle(triangleType,length));
//}
//
//main();
//
