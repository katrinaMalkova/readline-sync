//
//

function reverseStringWithException(str, exception) {
    let words = str.split(" ");
    let reversedWords = [];
    for (let word of words) {
      if (word !== exception) {
        let reversedWord = word.split("").reverse().join("");
        reversedWords.push(reversedWord);
      } else {
        reversedWords.push(word);
      }
    }
    let reversedString = reversedWords.join(" ");
    return reversedString;
  };

//let string = "Hello World";
//let exception = "World";
//let reversedString = reverseStringWithException(string, exception);
//console.log(reversedString);