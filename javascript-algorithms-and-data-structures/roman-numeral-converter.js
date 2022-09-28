function convertToRoman(num) {
    //split number in array [units, tens, hundreds, thousands]
    let arrNum = num.toString().split("").reverse();
    console.log(arrNum);
    let conversion = [["I", "V", "X"], ["X", "L", "C"], ["C", "D", "M"], ["M"]]
    let romanNum = [];
    //for each element in array, 
    for(let i=0; i<arrNum.length; i++){
      console.log(`arrNum[i]: ${arrNum[i]}`);
      //switch through cases 1-9 and add to result array
      switch(arrNum[i]){
        case "1": 
          romanNum.unshift(conversion[i][0]);
          break;
        case "2":
          romanNum.unshift(conversion[i][0].repeat(2));
          break;
        case "3":
          romanNum.unshift(conversion[i][0].repeat(3));
          break;
        case "4":
          romanNum.unshift(conversion[i][0]+conversion[i][1]);
          break;
        case "5":
          romanNum.unshift(conversion[i][1]);
          break;
        case "6":
          romanNum.unshift(conversion[i][1]+conversion[i][0]);
          break;
        case "7":
          romanNum.unshift(conversion[i][1]+(conversion[i][0].repeat(2)));
          break;
        case "8":
          romanNum.unshift(conversion[i][1]+(conversion[i][0].repeat(3)));
          break;
        case "9":
          romanNum.unshift(conversion[i][0]+conversion[i][2]);
          break;
  
      }
    }
      
    //join array into string to return
   return romanNum.join("");
  }
  
  console.log(convertToRoman(1000));