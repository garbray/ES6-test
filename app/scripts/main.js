'use strict';

// TODO make al the examples to review all the transpailer code
let myLet = 2;
const pi = 3.1;

var My = {
<<<<<<< Updated upstream
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
=======
    sqrt: x => {
<<<<<<< Updated upstream
    if (x < 0) throw new Error("sqrt can't work on negative number")
      	let secondLet = 1;
      	return Math.exp(Math.log(x) / myLet);
=======
    if (x < 0) throw new Error("sqrt can't work on negative number");
        return Math.exp(Math.log(x) / 2);
>>>>>>> Stashed changes
    },
};

class Foo {
	constructor(){
		this.secondLet = undefined;
	}
    doSomething() {
        return 'Do Something';
    }
>>>>>>> Stashed changes
};

<<<<<<< Updated upstream
// export default Foo;
//export default Foo;
=======
// export default Foo;
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
