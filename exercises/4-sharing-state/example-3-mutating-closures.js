// closeIt creates impure closures
// because the returned functions DO modify the closed variable
// calling the closed functions with the same args will not always return the same result

//Important note 
//the results always change !  because the returned functions DO modify the closed variable
function closeMutatingFunctions(str) {
  return [
    function () {
      return str + " pigs"; // will change this line to not modify str
    },
    function (param) {
      return str + param; // modified this too 
    }
  ]
}

let closedFunctions1 = closeMutatingFunctions("-");
const concatPigs1 = closedFunctions1[0], concatParam1 = closedFunctions1[1];
closedFunctions1 = null;
let ans = concatPigs1();
console.assert(ans === '- pigs', 'assert 1');
ans = concatPigs1();
console.assert(ans === '- pigs', 'assert 2');
console.assert(concatParam1(" rock!") === "- rock!", 'assert 3');
console.assert(concatParam1(" rock!") === "- rock!", 'assert 4');


let closedFunctions2 = closeMutatingFunctions("hoy");
const concatPigs2 = closedFunctions2[0], concatParam2 = closedFunctions2[1];
closedFunctions2 = null;
ans = concatPigs2();
console.assert(concatPigs2() === "hoy pigs", 'assert 5');
console.assert(concatPigs2() === "hoy pigs", 'assert 6');
ans = concatParam2();
console.assert(concatParam2(" cheese!") === "hoy cheese!", 'assert 7');
console.assert(concatParam2(" cheese!") === "hoy cheese!", 'assert 8');
