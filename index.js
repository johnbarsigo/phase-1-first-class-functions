function receivesAFunction (callback){
  callback();
}

function returnsANamedFunction() {
  function function1() {
    console.log ("Good day!");
  }
  return function1;
}

console.log (returnsANamedFunction());

function returnsAnAnonymousFunction() {
  return function (){
    console.log ("Goodbye");
  }
}