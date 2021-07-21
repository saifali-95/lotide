//FUNCTION TO REMOVE SPACES FROM THE STRING AND CONVERT ALL THE ELEMENTS TO UPPERCASE.

const updatedText = function (inputText){
  return inputText.split(" ").join("").toUpperCase(); 
}


//FUNCTION TO RETURN AN OBJECT WITH THE LETTER COUNT.

const countLetters = function (updatedText){
  let countObj={};
  for (const item in updatedText) {
    let counter = 0;
    for(let i=0; i < updatedText.length; i++){
      if (updatedText[i]===updatedText[item]){
        countObj[updatedText[item]]=counter+1;
        counter++;
      }
    }
  }
  return countObj;
}

//TEST CASES:
console.log(countLetters(updatedText('LHS')));
console.log(countLetters(updatedText('LightHouse Labs')));
console.log(countLetters(updatedText('SaIf Ali RaNdOm')));