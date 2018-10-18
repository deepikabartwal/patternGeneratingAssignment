const filledRectangle = function(length,breadth){
  let filledRow = "";
  let delim="";
  let line = "";
  for(lengthIndex=0;lengthIndex<length;lengthIndex++){
    line=line+"*";
  }

  for(breadthIndex=0;breadthIndex<breadth;breadthIndex++){
    filledRow=filledRow+delim+line;
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

let functionName = process.argv[2];
let length = +process.argv[3];
let breadth = +process.argv[4];

if(functionName=="filled"){
  console.log(filledRectangle(length,breadth));
}

if(functionName=="empty"){
  console.log(emptyRectangle(length,breadth));
}

if(functionName=="alternating"){
  console.log(alternatingRectangle(length,breadth));
}
