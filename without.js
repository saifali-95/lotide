const eqArrays = require('./eqArrays');
const assertArraysEqual = require ('./assertArraysEqual');


const without = function (source, itemsToRemove){
  if (!eqArrays(source, itemsToRemove)){
    let newArray=[];
    for (let i=0; i<source.length; i++){
      if (!(source[i]===itemsToRemove[i])){
        newArray.push(source[i]);
      }
    }
    return newArray;
  }
  
}

module.exports = without;

