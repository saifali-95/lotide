const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//FUNCTION TO RETURN AN OBJECT WITH THE LETTER POSITION(INDICES).

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i=0; i <sentence.length; i++){
    let array_1=[];
    if (sentence[i]!==' '){
      if(!(sentence[i] in results)){
        results[sentence[i]]=[i];
      }
      else if (sentence[i] in results){
        array_1=results[sentence[i]];
        array_1.push(i);
        results[sentence[i]]=array_1;
      }    
    }
  }
  return results;
}


module.exports = letterPositions;

