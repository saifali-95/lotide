# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @saif_a95/lotide`

**Require it:**

`const _ = require('@saif_a95/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqua(array1, array2)`: //PRINT PASSED OR FAILED IF TWO INPUT ARRAYS ARE SAME OR DIFFERENT RESPECTIVELY.
* `assertEqual(array1, array2)`: description
* `assertObjectsEqual(object1, object2)`: // FUNCTION WILL TAKE TWO INPUT OBJECT AND WILL CONSOLE LOG AN APPROPRIATE MESSAGE WHETHER THEY ARE SAME OR DIFFERENT.
* `countLetters(updatedText)`: //FUNCTION TO RETURN AN OBJECT WITH THE LETTER COUNT.
* `countOnly(names, itemsToCount)` : //FUNCTION WILL ACCEPT A VARIABLE TO BE COUNTED FROM THE PROVIDED OBJECT/ARRAY
* `eqArrays(array1, array2)` ://OUTPUT FALSE OR TRUE BY COMPARING TWO INPUT ARRAYS
* `eqObjects(object1, object2)` :// Returns true if both objects have identical keys with identical values else return false.
* `findKeys(object, callback)` : //find key of an object for the value obtained from the call back function.
* `findKeyBYValue(inputObject, inputValues)` : ///FUNCTION TO FIND A KEY BASED ON THE GIVEN INPUT VALUE
* `head(array)` : ////FINDING HEAD OF THE PROVIDED INPUT ARRAY:
* `letterPositions(sentence_input)` : //FUNCTION TO RETURN AN OBJECT WITH THE LETTER POSITION(INDICES) FOR THE PROVIDED INPUT_STRING.
* `map(array, callback)` : //RETURN AND ARRAY BASED ON THE TRUTHY VALUE FROM THE CALLBACK FUNCTION
* `middle(inputArray)` ://FUNCTION TO FIND THE MIDDLE ELEMENT OF AN ARRAY
* `tail(inputArray)` : //FUNCTION TO FIND TAIL OF AN ARRAY WITHOUT AFFECTING THE ACTUAL ARRAY:
* `takeUntil(array, callback)` : ////MAIN FUNCTION THAT WILL OUTPUT AN ARRAY AS SOON AS CALLBACK FUNCTION RETURN TRUTHY.
* `without(sourceArray, itemsToRemove)` : //FUNCTION WILL OUTPUT AN ARRAY WITHOUT ITEMS SPECIFIED IN THE INPUT(itemsToBeRemoved)