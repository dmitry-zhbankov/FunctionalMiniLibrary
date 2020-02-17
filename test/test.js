let assert = require("assert");
let arrLib = require("../func-mini-lib");

describe("func-mini-lib", function () {
    describe("function isArray()", function () {
        describe("should return true when value is", function () {
            it("[1, 3, 2, 1, 5, 3]", function () {
                assert.strictEqual(arrLib.isArray([1, 3, 2, 1, 5, 3]), true);
            });
        });

        describe("should return false when value is", function () {
            it("true", function () {
                assert.strictEqual(arrLib.isArray(true), false);
            });

            it("'str'", function () {
                assert.strictEqual(arrLib.isArray("str"), false);
            });

            it("1", function () {
                assert.strictEqual(arrLib.isArray(1), false);
            });

            it("null", function () {
                assert.strictEqual(arrLib.isArray(null), false);
            });

            it("undefined", function () {
                assert.strictEqual(arrLib.isArray(undefined), false);
            });

            it("Symbol", function () {
                assert.strictEqual(arrLib.isArray(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(arrLib.isArray({}), false);
            });
        });
    });

    describe("function isBoolean()", function () {
        describe("should return true when value is", function () {
            it("should return true when the value is true", function () {
                assert.strictEqual(arrLib.isBoolean(true), true);
            });

            it("should return true when the value is false", function () {
                assert.strictEqual(arrLib.isBoolean(false), true);
            });

            it("should return false when the value is Boolean(true)", function () {
                assert.strictEqual(arrLib.isBoolean(new Boolean(true)), true);
            });

            it("should return false when the value is Boolean()", function () {
                assert.strictEqual(arrLib.isBoolean(new Boolean()), true);
            });
        });

        describe("should return false when value is", function () {
            it("'str'", function () {
                assert.strictEqual(arrLib.isBoolean("str"), false);
            });

            it("1", function () {
                assert.strictEqual(arrLib.isBoolean(1), false);
            });

            it("null", function () {
                assert.strictEqual(arrLib.isBoolean(null), false);
            });

            it("undefined", function () {
                assert.strictEqual(arrLib.isBoolean(undefined), false);
            });

            it("Symbol", function () {
                assert.strictEqual(arrLib.isBoolean(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(arrLib.isBoolean({}), false);
            });
        });
    });

    describe("function isDate()", function () {
        describe("should return true when value is", function () {
            it("should return true when the value is Date.now()", function () {
                assert.strictEqual(arrLib.isDate(new Date()), true);
            });
        });

        describe("should return false when value is", function () {
            it("true", function () {
                assert.strictEqual(arrLib.isDate(true), false);
            });

            it("'str'", function () {
                assert.strictEqual(arrLib.isDate("str"), false);
            });

            it("1", function () {
                assert.strictEqual(arrLib.isDate(1), false);
            });

            it("null", function () {
                assert.strictEqual(arrLib.isDate(null), false);
            });

            it("undefined", function () {
                assert.strictEqual(arrLib.isDate(undefined), false);
            });

            it("Symbol", function () {
                assert.strictEqual(arrLib.isDate(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(arrLib.isDate({}), false);
            });
        });
    });

    describe("function isNumber()", function () {
        describe("should return true when value is", function () {
            it("1", function () {
                assert.strictEqual(arrLib.isNumber(1), true);
            });

            it("0xFF", function () {
                assert.strictEqual(arrLib.isNumber(0xFF), true);
            });

            it("0o33", function () {
                assert.strictEqual(arrLib.isNumber(0o33), true);
            });

            it("0b1111", function () {
                assert.strictEqual(arrLib.isNumber(0b1111), true);
            });

            it("new Number()", function () {
                assert.strictEqual(arrLib.isNumber(new Number()), true);
            });

            it("new Number(1)", function () {
                assert.strictEqual(arrLib.isNumber(new Number(1)), true);
            });
        });

        describe("should return false when value is", function () {
            it("{}", function () {
                assert.strictEqual(arrLib.isNumber({}), false);
            });

            it("NaN", function () {
                assert.strictEqual(arrLib.isNumber(NaN), false);
            });

            it("null", function () {
                assert.strictEqual(arrLib.isNumber(null), false);
            });

            it("true", function () {
                assert.strictEqual(arrLib.isNumber(true), false);
            });

            it("Infinity", function () {
                assert.strictEqual(arrLib.isNumber(Infinity), false);
            });

            it("undefined", function () {
                assert.strictEqual(arrLib.isNumber(undefined), false);
            });
        });
    });

    describe("function isString()", function () {
        describe("should return true when value is", function () {
            it("'str'", function () {
                assert.strictEqual(arrLib.isString("str"), true);
            });

            it("new String()", function () {
                assert.strictEqual(arrLib.isString(new String()), true);
            });
        });

        describe("should return false when value is", function () {
            it("true", function () {
                assert.strictEqual(arrLib.isString(true), false);
            });

            it("1", function () {
                assert.strictEqual(arrLib.isString(1), false);
            });

            it("null", function () {
                assert.strictEqual(arrLib.isString(null), false);
            });

            it("undefined", function () {
                assert.strictEqual(arrLib.isString(undefined), false);
            });

            it("Symbol", function () {
                assert.strictEqual(arrLib.isString(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(arrLib.isString({}), false);
            });
        });
    });

    describe("function isFunction()", function () {
        describe("should return true when value is", function () {
            it("()=>{return 1+2}", function () {
                assert.strictEqual(arrLib.isFunction(() => {
                    return 1 + 2
                }), true);
            });
        });
        describe("should return false when value is", function () {
            it("true", function () {
                assert.strictEqual(arrLib.isFunction(true), false);
            });

            it("'str'", function () {
                assert.strictEqual(arrLib.isFunction("str"), false);
            });

            it("1", function () {
                assert.strictEqual(arrLib.isFunction(1), false);
            });

            it("null", function () {
                assert.strictEqual(arrLib.isFunction(null), false);
            });

            it("undefined", function () {
                assert.strictEqual(arrLib.isFunction(undefined), false);
            });

            it("Symbol", function () {
                assert.strictEqual(arrLib.isFunction(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(arrLib.isFunction({}), false);
            });
        });
    });

    describe("function isUndefined()", function () {
        describe("should return true when value is", function () {
            it("undefined", function () {
                assert.strictEqual(arrLib.isUndefined(undefined), true);
            });
        });

        describe("should return false when value is", function () {
            it("true", function () {
                assert.strictEqual(arrLib.isUndefined(true), false);
            });

            it("'str'", function () {
                assert.strictEqual(arrLib.isUndefined("str"), false);
            });

            it("1", function () {
                assert.strictEqual(arrLib.isUndefined(1), false);
            });

            it("null", function () {
                assert.strictEqual(arrLib.isUndefined(null), false);
            });

            it("Symbol", function () {
                assert.strictEqual(arrLib.isUndefined(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(arrLib.isUndefined({}), false);
            });
        });
    });

    describe("function isNull()", function () {
        describe("should return true when value is", function () {
            it("null", function () {
                assert.strictEqual(arrLib.isNull(null), true);
            });
        });
        describe("should return false when value is", function () {
            it("true", function () {
                assert.strictEqual(arrLib.isNull(true), false);
            });

            it("'str'", function () {
                assert.strictEqual(arrLib.isNull("str"), false);
            });

            it("1", function () {
                assert.strictEqual(arrLib.isNull(1), false);
            });

            it("undefined", function () {
                assert.strictEqual(arrLib.isNull(undefined), false);
            });

            it("Symbol", function () {
                assert.strictEqual(arrLib.isNull(Symbol()), false);
            });

            it("{}", function () {
                assert.strictEqual(arrLib.isNull({}), false);
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
            assert.deepStrictEqual(arrLib.asChain([1, 3, 2, 1, 5, 3]).skip(3).take(2).value(), [1, 5]);
        });
        it("should return [2,1,5] when the parameters are [1, 3, 2, 1, 5, 3], skip 2, take 3", function () {
            assert.deepStrictEqual(arrLib.asChain([1, 3, 2, 1, 5, 3]).skip(2).take(3).value(), [2, 1, 5]);
        });
    });
});
