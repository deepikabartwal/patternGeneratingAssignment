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

let pattern = process.argv[2];
let length = process.argv[3];
if(pattern=="left"){
  console.log(leftAlignedTriangle(length));
}
if(pattern=="right"){
  console.log(rightAlignedTriangle(length));
}

