function rot13(str) {
    const codedArray = [...str];
  
    const decodedArray = codedArray.map(function decoder(char){
        //make sure the character is uppercase
        let upperChar = char.toUpperCase(); 
        
        // if char is letter from the alphabet, decode
        if (/[A-Z]/.test(char)){
          //get the character's unicode code
          let charCode = char.charCodeAt();
          
          //Check if the code needs to loop
            // A= 65, Z= 90. Letters with code bigger than 90-13, need to point to lower number
          if (charCode > 77){
            //use remainder to make sure larger characters refer to start of alphabet in unicode
            return String.fromCharCode((char.charCodeAt()+13) % 90 + 64);
          } else {
            return String.fromCharCode(char.charCodeAt()+13);
          }
        }
        // if char is not a letter from the alphabet, return as is
        return char;
    });
    
    return decodedArray.join("");
  }
  
  //rot13("SERR PBQR PNZC");
  console.log(rot13("SERR PBQR PNZC"));