function palindrome(str) {
    //remove non-alphanumeric characters
    let checkStr = str.replace(/[^a-zA-Z0-9]+/g, "");
  
    //make all lowercase
    checkStr = checkStr.toLowerCase();
  
    //reverse the string
    let reverseStr = checkStr.split("").reverse().join("");
  
    console.log(`checkStr: ${checkStr}, reverseStr: ${reverseStr}`)
    //check if both strings are equal
    return (checkStr==reverseStr);
  }
  
  palindrome("_eye");