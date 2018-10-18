const generateStar = function(length){
  let starLine = "";
  for( let starCount=0; starCount<length ; starCount++){
    starLine = starLine+"*";
  }
  return starLine;
}

const generateSpace = function(length){
  let spacingLine = "";
  for( let spaceCount = 0; spaceCount<length ; spaceCount++){
    spacingLine = spacingLine+" ";
  }
  return spacingLine;
}
const generateBottomTriangle = function(length){
  let generatedTriangle = "";
  let spaceLength = 0;
  let starLength = length - 2*spaceLength;
  let triangleHeight = Math.ceil(length/2);
  let delim = "";
  for(let rowNumber = 0; rowNumber<triangleHeight; rowNumber++){
    generatedTriangle = generatedTriangle+delim+generateSpace(spaceLength)+generateStar(starLength);
    delim ="\n";
    spaceLength++
    starLength=starLength-2;
  }
  return generatedTriangle;
}
const main = function(){
  let length = process.argv[2];
  console.log(generateBottomTriangle(length));
}
main();
