var My = {
  sqrt: x => {
    if (x < 0) throw new Error("sqrt can't work on negative number");
      return Math.exp(Math.log(x)/2);
  }
};

class Foo {

    doSomething() {
        return 'Do Something';
    }
};

// export default Foo;