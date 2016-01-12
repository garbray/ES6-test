"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO make al the examples to review all the transpailer code
var myLet = 1;

var My = {
    sqrt: function sqrt(x) {
        if (x < 0) throw new Error("sqrt can't work on negative number");
        myLet = 2;
        return Math.exp(Math.log(x) / myLet);
    }
};

var Foo = function () {
    function Foo() {
        _classCallCheck(this, Foo);
    }

    _createClass(Foo, [{
        key: "doSomething",
        value: function doSomething() {
            return 'Do Something';
        }
    }]);

    return Foo;
}();

;

// export default Foo;
//export default Foo;
//# sourceMappingURL=main.js.map
