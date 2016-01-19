'use strict';

// TODO make al the examples to review all the transpailer code
let myLet = 2;
const pi = 3.1;

var My = {
  sqrt: x => {
    if (x < 0) {
      throw new Error("sqrt can't work on negative number");
    }

    let secondLet = 1;
    return Math.exp(Math.log(x) / myLet);
  },
};

class Foo {
  constructor() {
    this.secondLet = undefined;
  }

  doSomething() {
    return 'Do Something';
  }
};

// export default Foo;
