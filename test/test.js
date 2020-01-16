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
            assert.equal(arrLib.isDate(Date.now()), true);
        });
    });

    describe("function isNumber()", function () {
        it("should return true when the value is 1", function () {
            assert.equal(arrLib.isNumber(1), true);
        });
    });

    describe("function isString()", function () {
        it("should return true when the value is 'str'", function () {
            assert.equal(arrLib.isString("str"), true);
        });
    });

    describe("function isFunction()", function () {
        it("should return true when the value is ()=>{return 1+2}", function () {
            assert.equal(arrLib.isFunction(()=>{return 1+2}), true);
        });
    });

    describe("function isUndefined()", function () {
        it("should return true when the value is undefined", function () {
            assert.equal(arrLib.isUndefined(undefined), true);
        });
    });

    describe("function isNull()", function () {
        it("should return true when the value is null", function () {
            assert.equal(arrLib.isNull(null), true);
        });
    });

    describe("function first()", function () {
        it("should return 1 when the value is [1, 3, 2, 1, 5, 3]", function () {
            assert.equal(arrLib.first([1, 3, 2, 1, 5, 3]), 1);
        });
    });

    describe("function last()", function () {
        it("should return 3 when the value is [1, 3, 2, 1, 5, 3]", function () {
            assert.equal(arrLib.last([1, 3, 2, 1, 5, 3]), 3);
        });
    });

    describe("function take()", function () {
        it("should return [1,3,2] when the parameters are [1, 3, 2, 1, 5, 3] and 3", function () {
            assert.deepEqual(arrLib.take([1, 3, 2, 1, 5, 3],3), [1,3,2]);
        });
    });

    describe("function skip()", function () {
        it("should return [1,5,3] when the parameters are [1, 3, 2, 1, 5, 3] and 3", function () {
            assert.deepEqual(arrLib.skip([1, 3, 2, 1, 5, 3],3), [1,5,3]);
        });
    });
});
