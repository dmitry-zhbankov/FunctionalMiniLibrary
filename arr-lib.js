let checkTypeLib = require("./check-type-lib");

let arrLib =  {
    asChain : function (arr) {
        this.result=arr;
        return this;
    },

    first : function (arr) {
        if (arr.length > 0)
            return arr[0];
        return null;
    },

    last : function (arr) {
        let n = arr.length;
        if (n > 0)
            return arr[n - 1];
        return null;
    },

    skip : function (arr, number) {
        if (checkTypeLib.isUndefined(number)) {
            if (checkTypeLib.isNumber(arr)) {
                number = arr;
                this.result = this.result.slice(number);
                return this;
            }
        }
        return arr.slice(number);
    },

    take : function (arr, number) {
        if (checkTypeLib.isUndefined(number)) {
            if (checkTypeLib.isNumber(arr)) {
                number = arr;
                this.result = this.result.slice(0, number);
                return this;
            }
        }
        return arr.slice(0, number);
    },
};

module.exports = arrLib;
