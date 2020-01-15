# Functional Mini Library
## Short Description
You are to implement a functional library.
## Topics
* Functional Programming
* JS Types
## Requirements
* Code style
* No bundling and modules
* The library should provide the following functionality:
    * bool isArray(obj)
    * bool isBoolean(obj)
    * bool isDate(obj)
    * bool isNumber(obj)
    * bool isString(obj)
    * bool isFunction(obj)
    * bool isUndefined(obj)
    * bool isNull(obj)
* Working with arrays:
    * obj first(arr)
    * obj last(arr)
    * newArr skip(arr, number)
    * newArr take(arr, number)
* Chaining: Implement the ability to create chains:
    asChain(arr).skip(func).take(func)
