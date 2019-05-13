var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chcolateBars, candyString){
  return [candyString, ...chcoclateBars];
}

function destructivelyAddElementToBeginningOfArray(chcoclateBars, candyString){
  return array.unshift(candyString);
}
