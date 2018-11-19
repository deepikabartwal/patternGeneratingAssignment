let lib = require("./src/pattern_lib.js");
let generateRectangle = lib.generateRectangle;
let generateTriangle = lib.generateTriangle;
let generateDiamond = lib.generateDiamond;
let patternRecord = {};
patternRecord.rectangle = generateRectangle;
patternRecord.triangle = generateTriangle;
patternRecord.diamond = generateDiamond;

const main = function(){
  let pattern = process.argv[2];
  let width = process.argv[3];
  let height = process.argv[4];
  let patternDetails = pattern.split("_");
  console.log(patternRecord[patternDetails[1]](patternDetails[0],width,height));
}
main();
