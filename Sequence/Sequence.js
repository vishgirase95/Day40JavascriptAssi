
let RandomNumber=Math.floor(Math.random()*10)+1;
console.log("Random Number from 1 to 10 : "+RandomNumber);

let Dice=Math.floor(Math.random()*6)+1;
console.log("Dice Number from 1 to 6 : "+Dice);


let Dice1=Math.floor(Math.random()*6)+1;
let Dice2=Math.floor(Math.random()*6)+1;
console.log("Add of Two Dice Number "+Dice1+" + "+Dice2+" = "+(Dice1+Dice2));

let UserInput1=parseInt(prompt("Enter First Number"));
let UserInput2=parseInt(prompt("Enter Second Number"));

console.log(typeof(UserInput2));
let add=UserInput1+UserInput2;
console.log(add);

console.log("Conversion");
let UserInput=parseInt(prompt("Enter Value in in to convert in ft"));

let Ft=12/UserInput;
console.log("value of ft is : "+ Ft);


let a=parseInt(prompt("Enter in a*b ft form Enter a:"));
let b=parseInt(prompt("Enter in a*b ft form Enter b:"));
let area=(a*b)/10.764;
console.log("Area in mt : "+area);
let areaPlotAcre=area/4047;
console.log("Area in acre : "+areaPlotAcre);

let num=parseInt(prompt("Enter number of plot "));
console.log("Total Area : " +(areaPlotAcre*num));



