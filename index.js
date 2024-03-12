function receivesAFunction(name) {
    return name ();
}
function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      // Function body
    }
  
    // Return the named function
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    return function () {
        
    };
  }