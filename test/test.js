let assert = require("assert");
let arrLib = require("../arr-lib");
let checkTypeLib = require("../check-type-lib");

describe("func-mini-lib", function () {
    describe("function isArray()", function () {
        describe("should return true when value is", function () {
            it("[1, 3, 2, 1, 5, 3]", function () {
                assert.strictEqual(checkTypeLib.isArray([1, 3, 2, 1, 5, 3]), true);
            });
        });

        describe("should return false when value is", function () {
            it("true", function () {
                assert.strictEqual(checkTypeLib.isArray(true), false);
            });

            it("'str'", function () {
                assert.strictEqual(checkTypeLib.isArray("str"), false);
            });

            it("1", function () {
                assert.strictEqual(checkTypeLib.isArray(1), false);
            });

            it("null", function () {
                assert.strictEqual(checkTypeLib.isArray(null), false);
            });

            it("undefined", function () {
                assert.strictEqual(checkTypeLib.isArray(undefined), false);
            });

            it("Symbol", function () {
                assert.strictEqual(checkTypeLib.isArray(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(checkTypeLib.isArray({}), false);
            });
        });
    });

    describe("function isBoolean()", function () {
        describe("should return true when value is", function () {
            it("should return true when the value is true", function () {
                assert.strictEqual(checkTypeLib.isBoolean(true), true);
            });

            it("should return true when the value is false", function () {
                assert.strictEqual(checkTypeLib.isBoolean(false), true);
            });

            it("should return false when the value is Boolean(true)", function () {
                assert.strictEqual(checkTypeLib.isBoolean(Boolean(true)), true);
            });

            it("should return false when the value is Boolean()", function () {
                assert.strictEqual(checkTypeLib.isBoolean(Boolean()), true);
            });
        });

        describe("should return false when value is", function () {
            it("'str'", function () {
                assert.strictEqual(checkTypeLib.isBoolean("str"), false);
            });

            it("1", function () {
                assert.strictEqual(checkTypeLib.isBoolean(1), false);
            });

            it("null", function () {
                assert.strictEqual(checkTypeLib.isBoolean(null), false);
            });

            it("undefined", function () {
                assert.strictEqual(checkTypeLib.isBoolean(undefined), false);
            });

            it("Symbol", function () {
                assert.strictEqual(checkTypeLib.isBoolean(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(checkTypeLib.isBoolean({}), false);
            });
        });
    });

    describe("function isDate()", function () {
        describe("should return true when value is", function () {
            it("should return true when the value is Date.now()", function () {
                assert.strictEqual(checkTypeLib.isDate(new Date()), true);
            });
        });

        describe("should return false when value is", function () {
            it("true", function () {
                assert.strictEqual(checkTypeLib.isDate(true), false);
            });

            it("'str'", function () {
                assert.strictEqual(checkTypeLib.isDate("str"), false);
            });

            it("1", function () {
                assert.strictEqual(checkTypeLib.isDate(1), false);
            });

            it("null", function () {
                assert.strictEqual(checkTypeLib.isDate(null), false);
            });

            it("undefined", function () {
                assert.strictEqual(checkTypeLib.isDate(undefined), false);
            });

            it("Symbol", function () {
                assert.strictEqual(checkTypeLib.isDate(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(checkTypeLib.isDate({}), false);
            });
        });
    });

    describe("function isNumber()", function () {
        describe("should return true when value is", function () {
            it("1", function () {
                assert.strictEqual(checkTypeLib.isNumber(1), true);
            });

            it("0xFF", function () {
                assert.strictEqual(checkTypeLib.isNumber(0xFF), true);
            });

            it("0o33", function () {
                assert.strictEqual(checkTypeLib.isNumber(0o33), true);
            });

            it("0b1111", function () {
                assert.strictEqual(checkTypeLib.isNumber(0b1111), true);
            });

            it("new Number()", function () {
                assert.strictEqual(checkTypeLib.isNumber(Number()), true);
            });

            it("new Number(1)", function () {
                assert.strictEqual(checkTypeLib.isNumber(Number(1)), true);
            });
        });

        describe("should return false when value is", function () {
            it("{}", function () {
                assert.strictEqual(checkTypeLib.isNumber({}), false);
            });

            it("NaN", function () {
                assert.strictEqual(checkTypeLib.isNumber(NaN), false);
            });

            it("null", function () {
                assert.strictEqual(checkTypeLib.isNumber(null), false);
            });

            it("true", function () {
                assert.strictEqual(checkTypeLib.isNumber(true), false);
            });

            it("Infinity", function () {
                assert.strictEqual(checkTypeLib.isNumber(Infinity), false);
            });

            it("undefined", function () {
                assert.strictEqual(checkTypeLib.isNumber(undefined), false);
            });
        });
    });

    describe("function isString()", function () {
        describe("should return true when value is", function () {
            it("'str'", function () {
                assert.strictEqual(checkTypeLib.isString("str"), true);
            });

            it("new String()", function () {
                assert.strictEqual(checkTypeLib.isString(String()), true);
            });
        });

        describe("should return false when value is", function () {
            it("true", function () {
                assert.strictEqual(checkTypeLib.isString(true), false);
            });

            it("1", function () {
                assert.strictEqual(checkTypeLib.isString(1), false);
            });

            it("null", function () {
                assert.strictEqual(checkTypeLib.isString(null), false);
            });

            it("undefined", function () {
                assert.strictEqual(checkTypeLib.isString(undefined), false);
            });

            it("Symbol", function () {
                assert.strictEqual(checkTypeLib.isString(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(checkTypeLib.isString({}), false);
            });
        });
    });

    describe("function isFunction()", function () {
        describe("should return true when value is", function () {
            it("()=>{return 1+2}", function () {
                assert.strictEqual(checkTypeLib.isFunction(() => {
                    return 1 + 2
                }), true);
            });
        });
        describe("should return false when value is", function () {
            it("true", function () {
                assert.strictEqual(checkTypeLib.isFunction(true), false);
            });

            it("'str'", function () {
                assert.strictEqual(checkTypeLib.isFunction("str"), false);
            });

            it("1", function () {
                assert.strictEqual(checkTypeLib.isFunction(1), false);
            });

            it("null", function () {
                assert.strictEqual(checkTypeLib.isFunction(null), false);
            });

            it("undefined", function () {
                assert.strictEqual(checkTypeLib.isFunction(undefined), false);
            });

            it("Symbol", function () {
                assert.strictEqual(checkTypeLib.isFunction(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(checkTypeLib.isFunction({}), false);
            });
        });
    });

    describe("function isUndefined()", function () {
        describe("should return true when value is", function () {
            it("undefined", function () {
                assert.strictEqual(checkTypeLib.isUndefined(undefined), true);
            });
        });

        describe("should return false when value is", function () {
            it("true", function () {
                assert.strictEqual(checkTypeLib.isUndefined(true), false);
            });

            it("'str'", function () {
                assert.strictEqual(checkTypeLib.isUndefined("str"), false);
            });

            it("1", function () {
                assert.strictEqual(checkTypeLib.isUndefined(1), false);
            });

            it("null", function () {
                assert.strictEqual(checkTypeLib.isUndefined(null), false);
            });

            it("Symbol", function () {
                assert.strictEqual(checkTypeLib.isUndefined(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(checkTypeLib.isUndefined({}), false);
            });
        });
    });

    describe("function isNull()", function () {
        describe("should return true when value is", function () {
            it("null", function () {
                assert.strictEqual(checkTypeLib.isNull(null), true);
            });
        });
        describe("should return false when value is", function () {
            it("true", function () {
                assert.strictEqual(checkTypeLib.isNull(true), false);
            });

            it("'str'", function () {
                assert.strictEqual(checkTypeLib.isNull("str"), false);
            });

            it("1", function () {
                assert.strictEqual(checkTypeLib.isNull(1), false);
            });

            it("undefined", function () {
                assert.strictEqual(checkTypeLib.isNull(undefined), false);
            });

            it("Symbol", function () {
                assert.strictEqual(checkTypeLib.isNull(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(checkTypeLib.isNull({}), false);
            });
        });
    });

    describe("function first()", function () {
        it("should return 1 when the value is [1, 3, 2, 1, 5, 3]", function () {
            assert.strictEqual(arrLib.first([1, 3, 2, 1, 5, 3]), 1);
        });
        it("should return 2 when the value is [2, 1, 5, 3]", function () {
            assert.strictEqual(arrLib.first([2, 1, 5, 3]), 2);
        });
        it("should return null when the value is []", function () {
            assert.strictEqual(arrLib.first([]), null);
        });
    });

    describe("function last()", function () {
        it("should return 3 when the value is [1, 3, 2, 1, 5, 3]", function () {
            assert.strictEqual(arrLib.last([1, 3, 2, 1, 5, 3]), 3);
        });
        it("should return 5 when the value is [2, 1, 5]", function () {
            assert.strictEqual(arrLib.last([2, 1, 5]), 5);
        });
        it("should return null when the value is []", function () {
            assert.strictEqual(arrLib.last([]), null);
        });
    });

    describe("function take()", function () {
        it("should return [1,3,2] when the parameters are [1, 3, 2, 1, 5, 3] and 3", function () {
            assert.deepStrictEqual(arrLib.take([1, 3, 2, 1, 5, 3], 3), [1, 3, 2]);
        });
        it("should return [1,3,2,1,5] when the parameters are [1, 3, 2, 1, 5, 3] and 5", function () {
            assert.deepStrictEqual(arrLib.take([1, 3, 2, 1, 5, 3], 5), [1, 3, 2, 1, 5]);
        });
    });

    describe("function skip()", function () {
        it("should return [1,5,3] when the parameters are [1, 3, 2, 1, 5, 3] and 3", function () {
            assert.deepStrictEqual(arrLib.skip([1, 3, 2, 1, 5, 3], 3), [1, 5, 3]);
        });
        it("should return [1,5,3] when the parameters are [3, 2, 1, 5, 3] and 2", function () {
            assert.deepStrictEqual(arrLib.skip([3, 2, 1, 5, 3], 2), [1, 5, 3]);
        });
    });

    describe("functions asChain() skip() take() value()", function () {
        it("should return [1,5] when the parameters are [1, 3, 2, 1, 5, 3], skip 3, take 2", function () {
            assert.deepStrictEqual(arrLib.asChain([1, 3, 2, 1, 5, 3]).skip(3).take(2).result, [1, 5]);
        });
        it("should return [2,1,5] when the parameters are [1, 3, 2, 1, 5, 3], skip 2, take 3", function () {
            assert.deepStrictEqual(arrLib.asChain([1, 3, 2, 1, 5, 3]).skip(2).take(3).result, [2, 1, 5]);
        });
        it("should return [1] when the parameters are [1, 2], take 1", function () {
            assert.deepStrictEqual(arrLib.asChain([1, 2]).take(1).result, [1]);
        });
        it("should return [2] when the parameters are [2, 3], take 1", function () {
            assert.deepStrictEqual(arrLib.asChain([2, 3]).take(1).result, [2]);
        });
        it("should return [2,1,5] when the parameters are [1, 2], take 1", function () {
            assert.deepStrictEqual(arrLib.asChain([3, 2]).take(1).result, [3]);
        });
    });
});
