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

//MAIN MAPPING FUNCTION

const map = function (array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//TESTING CASE

const words = ["ground", "control", "to", "major", "tom"];
const intros = ["Saif", "ali","canada"];
const names = ["ilam", "Mark", "Sam"];


assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]); //PASSED
assertArraysEqual(map(intros, intro => intro[0]), ['S', 'a', 'c']); //PASSED
assertArraysEqual(map(names, name => name[0]), ['i', 'm', 's']); //FAILED

//const results1 = map(words, word => word[0]);
//console.log(results1); // EXPECTED OUTCOME TO BE [ 'g', 'c', 't', 'm', 't' ]