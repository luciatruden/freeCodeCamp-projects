function telephoneCheck(str) {
    //Regex explained
    // /            :start regex
    // ^			      :starts with
    // (1 |1|)			:1 OR 1 followed by space OR nothing
    // (\(\d{3}\)|\d{3}(-| )*) :either:
      //        \(\d{3}\) *		:3 digits between parenthesis followed by optional whitespace OR
      //        \d{3}(-| )*		:3 digits followed by a hyphen, a whitespace or none
    // \d{3}			  :3digits
    // [ -]*			  :a space or a hyphen or none
    // \d{4}			  :4 digits
    // $			      :ends with
    // /            :end regex
    const regEx = /^(1 |1|)(\(\d{3}\) *|\d{3}(-| )*)\d{3}[ -]*\d{4}$/;
    return regEx.test(str);

    
  }
  
  telephoneCheck("555-555-5555");
  telephoneCheck("(555)555-5555");
  telephoneCheck("(555) 555-5555");
  telephoneCheck("555 555 5555");
  telephoneCheck("5555555555");
  telephoneCheck("1 555 555 5555");

  
  
  
  
  
  