function generateNumber() {
  // generate a random integer(hint : Math.random)
  num=Math.floor(100*Math.random()+1)
  document.querySelector("#number").innerHTML=num
  checkOddEven(num)
}

function checkOddEven(num) {
  // logic for even / odd
  if(num%2==0){
    document.querySelector("#odd-even").innerHTML="The number is even"

  }
  else{
    document.querySelector("#odd-even").innerHTML="The number is odd"

  }
}

window.onload = function () {
  // add event listeners to the button here
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
