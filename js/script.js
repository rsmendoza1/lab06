/*eslint-env browser*/

//DGLOBAL VARIABLES 
var futureValue; 
var investment; 
var rate; 
var years; 
var i; 

investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
rate = parseFloat(window.prompt("Enter interest rate as xx.x")); 
years = parseInt(window.prompt("Enter number of years"),10); 

futureValue = investment;
for (i = 1; i <= years, i += 1){
    futureValue = futureValue + (futureValue * rate/100);
}
futureValue = parseInt(futureValue, 10);

//DISPLAY RESULTS
window.document.write("Investment amount: " + investment + "<br>");
window.document.write("Interest Rate: " + rate + "<br>");
window.document.write("Years: " + years + "<br>");
window.document.write("Future Value: " + futureValue + "<br>");