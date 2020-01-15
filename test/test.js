let assert = require("assert");

let arrLib = require("../func-mini-lib")

let arr = [1, 3, 2, 1, 5, 3];

describe("func-mini-lib", function () {
    describe("first", function () {
        it("should return 1 from [1, 3, 2, 1, 5, 3]", function () {
            assert.equal(arrLib.first([1, 3, 2, 1, 5, 3]), 1);
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
