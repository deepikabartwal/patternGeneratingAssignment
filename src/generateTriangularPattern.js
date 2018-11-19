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

const main = function(){
let triangleType= process.argv[2];
let length = process.argv[3];
  console.log(generateTriangle(triangleType,length));
}

main();

