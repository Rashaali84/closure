// any function that returns a new function creates a closure
// returning a function that was passed as an argument does not create a closure
// the returned function must be declared inside the function call ("frame" on js tutor)

const doesItClose = (func, arg) => {
  const returnVal = func(arg);
  const returnedAFunction = typeof returnVal === 'function';
  const returnedArgument = arg === returnVal;

  const createsAClosure = returnedAFunction && !returnedArgument;
  return createsAClosure;
}
//the function inside the parent function 
//use lexical environments od its parent never
//This is a closure function 
const never = (x) => {
  //return x;
  var inValue = x;
  function returnAnswer() {
    return x;
  }
  return returnAnswer;
}
const whenPassed4 = doesItClose(never, 4);
console.assert(whenPassed4 === true, "... when passed 4");

const whenPassedAFunction = doesItClose(never, function () { });
console.assert(whenPassedAFunction === true, "... when passed a function");

const whenPassedAnArray = doesItClose(never, []);
console.assert(whenPassedAnArray === true, "... when passed an array");

const whenPassedItself = doesItClose(never, never);
console.assert(whenPassedItself === true, "... when passed itself");
