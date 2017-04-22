function plaintext(str) {
  var i = 0;
  str1 = str[1];       //get the value located the index 1, in this case "h"
  i += 2;

 while (i < str.length){
    i = i + parseInt(str[i], 10) + 1;   //i is 2 + the integer in the position i of the string + 1
    str1 += str[i];                           //str1 is the value of the str1 plus the value located in str[i]
    i = i + 1;                                  //update i and continue the loop
  }
  return str1;
}

var str = "0h2abe1zy";
console.log(plaintext(str)); //prints hey

var str1 = "0h2zyi2467"
console.log(plaintext(str1)); //prints hi7


//Other way taking into account the first character
