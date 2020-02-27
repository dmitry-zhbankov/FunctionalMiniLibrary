let checkTypeLib = {};

checkTypeLib = (function (context) {
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

    return context;

})(checkTypeLib);

module.exports = checkTypeLib;
