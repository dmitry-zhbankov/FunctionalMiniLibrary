let arrLib = {};

arrLib = (function (context) {

    context.isArray = function (obj) {
        return Array.isArray(obj);
    };

    context.isBoolean = function (obj) {
        return typeof obj === 'boolean' ||
            obj instanceof Boolean;
    };

    context.isDate = function (obj) {
        return obj instanceof Date;
    };

    context.isNumber = function (obj) {
        return !isNaN(parseFloat(obj)) && isFinite(obj);
    };

    context.isString = function (obj) {
        return typeof obj === "string" ||
            obj instanceof String;
    };

    context.isFunction = function (obj) {
        return typeof obj === "function";
    };

    context.isUndefined = function (obj) {
        return typeof obj === "undefined";
    };

    context.isNull = function (obj) {
        return obj === null;
    };

    let value;

    context.value = function () {
        return value;
    };

    context.asChain = function (arr) {

        value = Array.from(arr);
        return context;
    };

    context.first = function (arr) {
        if (arr.length > 0)
            return arr[0];
        return null;
    };

    context.last = function (arr) {
        let n = Array.from(arr).length;
        if (n > 0)
            return arr[n - 1];
        return null;
    };

    context.skip = function (arr, number) {
        if (context.isUndefined(number)) {
            if (context.isNumber(arr)) {
                number = arr;
                value = value.slice(number);
                return context;
            }
        }
        return Array.from(arr).slice(number);
    };

    context.take = function (arr, number) {
        if (context.isUndefined(number)) {
            if (context.isNumber(arr)) {
                number = arr;
                value = value.slice(0, number);
                return context;
            }
        }
        return Array.from(arr).slice(0, number);
    };

    return context;

})(arrLib);

module.exports = arrLib;
