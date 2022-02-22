# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rajink/lotide`

**Require it:**

`const _ = require('@rajink/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

assertArraysEqual(array1, array2): tests if two arrays are equals
assertEqual(value1, value2): tests if two values are equals
assertObjectsEqual(object1, object2): tests if two objects are equal
eqArrays(array1, array2): compares if two arrays are equal
eqObjects(object1, object2): compares if two objects are equal
countLetters(string): returns the count of each letter within a string
countOnly(array, object): counts and returns occurrence of object within an array
findKey(object, callback): returns the first key for which the callback returns a true
findKeyByValue(object, objectValue): takes an object and returns the key of the object
flatten(array): flattens an array of arrays into a single-level array
head(array): returns the 1st element of an array
letterPositions(string): returns all the letters of a string
map(array, callback): returns a new array with the applied callback on the original array
middle(array): returns the middle element of an array
tail(array): returns the entire array minus the first element
takeUntil(array, callback): returns an array with elements upto the callback provided
without(list, filter): returns a new array without items to remove list