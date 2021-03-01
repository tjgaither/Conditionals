var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("Enter the first number"));

if (isNaN(num1) == false) {
  
  var num2 = Number(prompt("Enter the second number"));
  
   if (isNaN(num2) == false) {
     
     var operator = prompt("Pick an operator *, -, +, /");
     
     if (operator == "*") {
       
       sum = num1 * num2;
       
       containerEle.innerHTML = "The answer is " + sum;
       
     } else if (operator == "-") {
       
       sum = num1 - num2;
       
       containerEle.innerHTML = "The answer is " + sum;
       
     } else if (operator == "+") {
       
       sum = num1 + num2;
       
       containerEle.innerHTML = "The answer is " + sum;
       
     } else if (operator == "/") {
       
       sum = num1 / num2;
       
       containerEle.innerHTML = "The answer is " + sum;
       
     } else {
       
       containerEle.innerHTML = "Error...invalid operator";
     }
   } else {
     containerEle.innerHTML = "Error...that is not a number"
     
   }
} else {
  containerEle.innerHTML = "Error...that is not a number"
  
}