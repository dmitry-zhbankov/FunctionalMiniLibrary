let assert = require("assert");
let arrLib = require("../func-mini-lib");

describe("func-mini-lib", function () {
    describe("function isArray()", function () {
        it("should return true when the value is [1, 3, 2, 1, 5, 3]", function () {
            assert.equal(arrLib.isArray([1, 3, 2, 1, 5, 3]), true);
        });

        it("should return false when the value is 'str'", function () {
            assert.equal(arrLib.isArray("str"), false);
        });
    });

    describe("function isBoolean()", function () {
        it("should return true when the value is true", function () {
            assert.equal(arrLib.isBoolean(true), true);
        });

        it("should return false when the value is 2", function () {
            assert.equal(arrLib.isBoolean(2), false);
        });
    });

    describe("function isDate()", function () {
        it("should return true when the value is Date.now()", function () {
            assert.equal(arrLib.isDate(new Date()), true);
        });

        it("should return false when the value is 2", function () {
            assert.equal(arrLib.isDate(2), false);
        });
    });

    describe("function isNumber()", function () {
        it("should return true when the value is 'str'", function () {
            assert.equal(arrLib.isNumber(1), true);
        });

        it("should return false when the value is 1", function () {
            assert.equal(arrLib.isNumber("str"), false);
        });
    });

    describe("function isString()", function () {
        it("should return true when the value is 'str'", function () {
            assert.equal(arrLib.isString("str"), true);
        });

        it("should return false when the value is 1", function () {
            assert.equal(arrLib.isString(1), false);
        });
    });

    describe("function isFunction()", function () {
        it("should return true when the value is ()=>{return 1+2}", function () {
            assert.equal(arrLib.isFunction(() => {
                return 1 + 2
            }), true);
        });

        it("should return false when the value is 1, function ()", function () {
            assert.equal(arrLib.isFunction(1), false);
        });
    });

    describe("function isUndefined()", function () {
        it("should return true when the value is undefined", function () {
            assert.equal(arrLib.isUndefined(undefined), true);
        });

        it("should return false when the value is null", function () {
            assert.equal(arrLib.isUndefined(null), false);
        });
    });

    describe("function isNull()", function () {
        it("should return true when the value is null", function () {
            assert.equal(arrLib.isNull(null), true);
        });

        it("should return false when the value is undefined", function () {
            assert.equal(arrLib.isNull(undefined), false);
        });
    });

    describe("function first()", function () {
        it("should return 1 when the value is [1, 3, 2, 1, 5, 3]", function () {
            assert.equal(arrLib.first([1, 3, 2, 1, 5, 3]), 1);
        });

        it("should return 2 when the value is [2, 1, 5, 3]", function () {
            assert.equal(arrLib.first([2, 1, 5, 3]), 2);
        });
    });

    describe("function last()", function () {
        it("should return 3 when the value is [1, 3, 2, 1, 5, 3]", function () {
            assert.equal(arrLib.last([1, 3, 2, 1, 5, 3]), 3);
        });

        it("should return 5 when the value is [2, 1, 5]", function () {
            assert.equal(arrLib.last([2, 1, 5]), 5);
        });
    });

    describe("function take()", function () {
        it("should return [1,3,2] when the parameters are [1, 3, 2, 1, 5, 3] and 3", function () {
            assert.deepEqual(arrLib.take([1, 3, 2, 1, 5, 3], 3), [1, 3, 2]);
        });

        it("should return [1,3,2,1,5] when the parameters are [1, 3, 2, 1, 5, 3] and 5", function () {
            assert.deepEqual(arrLib.take([1, 3, 2, 1, 5, 3], 5), [1, 3, 2, 1, 5]);
        });
    });

    describe("function skip()", function () {
        it("should return [1,5,3] when the parameters are [1, 3, 2, 1, 5, 3] and 3", function () {
            assert.deepEqual(arrLib.skip([1, 3, 2, 1, 5, 3], 3), [1, 5, 3]);
        });

        it("should return [1,5,3] when the parameters are [3, 2, 1, 5, 3] and 2", function () {
            assert.deepEqual(arrLib.skip([3, 2, 1, 5, 3], 2), [1, 5, 3]);
        });
    });

    describe("functions asChain() skip() take() value()", function () {
        it("should return [1,5] when the parameters are [1, 3, 2, 1, 5, 3], skip 3, take 2", function () {
            assert.deepEqual(arrLib.asChain([1, 3, 2, 1, 5, 3]).skip(3).take(2).value(), [1, 5]);
        });

        it("should return [2,1,5] when the parameters are [1, 3, 2, 1, 5, 3], skip 2, take 3", function () {
            assert.deepEqual(arrLib.asChain([1, 3, 2, 1, 5, 3]).skip(2).take(3).value(), [2, 1, 5]);
        });
    });
});
