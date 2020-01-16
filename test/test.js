let assert = require("assert");
let arrLib = require("../func-mini-lib");

describe("func-mini-lib", function () {
    describe("function isArray()", function () {
        it("should return true when the value is [1, 3, 2, 1, 5, 3]", function () {
            assert.equal(arrLib.isArray([1, 3, 2, 1, 5, 3]), true);
        });
    });

    describe("function isBoolean()", function () {
        it("should return true when the value is true", function () {
            assert.equal(arrLib.isBoolean(true), true);
        });
    });

    describe("function isDate()", function () {
        it("should return true when the value is Date.now()", function () {
            assert.equal(arrLib.isBoolean(Date.now()), true);
        });
    });

    describe("function isNumber()", function () {
        it("should return true when the value is 1", function () {
            assert.equal(arrLib.isNumber(1), 1);
        });
    });

    describe("function first()", function () {
        it("should return true when the value is [1, 3, 2, 1, 5, 3]", function () {
            assert.equal(arrLib.last([1, 3, 2, 1, 5, 3]), 3);
        });
    });
});


// p.innerText = arrLib.first();
// document.body.appendChild(p);

// p = document.createElement("p");
// p.innerText = arrLib.last([1, 3, 2, 1, 5, 3]);
// document.body.appendChild(p);

// p = document.createElement("p");
// p.innerText = arrLib.skip([1, 3, 2, 1, 5, 3], 2);
// document.body.appendChild(p);

// p = document.createElement("p");
// p.innerText = arrLib.take([1, 3, 2, 1, 5, 3], 2);
// document.body.appendChild(p);

// p = document.createElement("p");
// p.innerText = arrLib.asChain([1, 3, 2, 1, 5, 3]).skip(2).take(2).value();
// document.body.appendChild(p);
