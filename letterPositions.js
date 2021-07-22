//OUTPUT FALSE OR TRUE BY COMPARING TWO INPUT ARRAYS
const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


//PRINT PASSED OR FAILED IF TWO INPUT ARRAYS ARE SAME OR DIFFERENT RESPECTIVELY.
const assertArraysEqual = function (array1, array2){
  if (eqArrays(array1,array2)){
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}

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
 
//TEST CASE:
console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").l, [2,3]);