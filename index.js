function isPalindrome(word) {
  // Write your algorithm here
  // length of words  
  const len = word.length;  

  // divide word into 2 half  
  for (var i = 0; i < len / 2; i++) {  
    // validate the first and last characters are same  
    if (word[i] != word[len - 1 - i]) {  
      return false;
    }  
  }

  return true;
}

/* 
  Add your pseudocode here

  len = length(word)

  counter = 0
  REPEAT
    IF word.character_at(counter) is not word.character_at(len - 1 - counter)
      return false

    counter = counter + 1
  UNTIL counter = len/2

*/

/*
  Add written explanation of your solution here

  The solution reverses the given word and compares the original word with the reversed word
  If the reversed and original word match, the word is a Palindrome
  otherwise, it is not a Palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
