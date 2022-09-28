function checkCashRegister(price, cash, cid) {
    //Object currencyTable for reference
    const currencyTable = {
      PENNY:    1,
      NICKEL:   5,
      DIME:     10,
      QUARTER:  25,
      ONE:      100,
      FIVE:     500,
      TEN:      1000,
      TWENTY:   2000,
      "ONE HUNDRED":  10000
    }
  
    //Change values to pennies to avoid using floats
    let amountToReturn = (cash  - price)*100;
  
    //Object to hold bills/coins included in change
    let changeObj = {};
    
    //reverse cid array to sort it from larger to smaller bills/coins
    //multiply all values by 100 to convert to pennies
    let reversedCid = cid.reverse().map(function (billOrCoin) { 
      return [billOrCoin[0], Math.round(billOrCoin[1]*100)];
    });
     
    //iterate around reversedCid
    for (let i = 0; i < reversedCid.length; i++){
      //console.log("amount to return enter for: ", amountToReturn);
  
      //currencyLabel: the label or name of the currentyTable property e.g. "ONE"
      let currencyLabel = reversedCid[i][0];
      //currencyValue: the value assigned to a currencyLabel e.g. "ONE" is 100p
      let currencyValue = currencyTable[reversedCid[i][0]];
      
      //while both:
          //the amount to return is greater than current Bill/Coin value
          //and
          //there is at least one of that type of Bill/Coin left in cid
      while (amountToReturn >= currencyValue && reversedCid[i][1] >= currencyValue) {
        //remove one Bill/Coin from cid
        reversedCid[i][1] -= currencyValue;
        //decrease amount to return to customer
        amountToReturn -= currencyValue; 
        //add Bill/Coin to change object
        //first check if the property exists
        if (changeObj.hasOwnProperty(currencyLabel)){
          changeObj[currencyLabel] += currencyValue;
        } else {
          changeObj[currencyLabel] = currencyValue;
        }
        
      }
      
    }
    //cashRegStatus object to be returned
    let cashRegStatus = {};
  
    //if amountToReturn is greater than 0: insuficient funds
    if (amountToReturn > 0) {
        cashRegStatus.status = "INSUFFICIENT_FUNDS";
        cashRegStatus.change = [];
    } else {
      //if there is no change left in reversedCid: closed
      if (reversedCid.every(billOrCoin => billOrCoin[1]===0)){
        cashRegStatus.status = "CLOSED";
        cashRegStatus.change = cid.reverse(); //cid reversed to original state
  
      } else { //else: Open
        cashRegStatus.status = "OPEN";
        //Divide values by 100 to convert back to dollars
        cashRegStatus.change = Object.entries(changeObj).map(function (billOrCoin){
          return [billOrCoin[0], billOrCoin[1]/100];
        });
      }
    }
    
  
    return cashRegStatus;
  }