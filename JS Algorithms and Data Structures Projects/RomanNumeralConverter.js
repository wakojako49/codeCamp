function telephoneCheck(str) {
    let regNum = /[0-9]/gi;
    
    //checks if regex has 10 digits and nothing else
    if (str.match(regNum).length == 10) {
      signCheck(str);
      //check if 11 digits has USA country code
    } else if(str.match(regNum).length == 11 && /^1/.test(str)) {
      return "11 digit true";
    } else {
      return false;
    }  
  }
  
  //function to check format 
  function signCheck(str){
    let regex01 = /\d{3}-\d{3}-\d{4}/;
    let regex02 = /(\d{3})\d{3}-\d{4}/;
    let regex03 = /\d{3}\s\d{3}\s\d{4}/;
  /*let regex04 = /1\d{3}-\d{3}-\d{4}/;
    let regex05 = /1(\d{3})\d{3}-\d{4}/;
    let regex06 = /1\s(\d{3})\d{3}-\d{4}/;
    let regex07 = /1\s\d{3}\s\d{3}\s\d{4}/; */
  
    if(regex01.test(str)==true || regex02.test(str)==true || regex03.test(str)==true){
      return "true";
    } else {
      return "potato";
      }
  }
  
  console.log(telephoneCheck("555-555-5555"));
  console.log(signCheck("(555) 555-5555"));
