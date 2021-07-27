const assertEqual = require('./assertEqual');


//find a key of an object from a given value
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


//find key of an object for the value obtained from the call back function.
const findKey = function (object1, callback){
  for (let item in object1){
    if(callback(object1[item])){
      return getKeyByValue(object1,object1[item]);
    }
  }
}

module.exports = {findKey, getKeyByValue};

