let input=parseInt(prompt("Enter the number"));

let Arry=new Array("zero","one","two","three","four","five","six","seven","eight","nine");

if(input>9){
    console.log("number out of reach");
}
console.log(Arry[input]);

let input2=parseInt(prompt("Enter the number for Weak"));

let Arry2=new Array("Sunday","Monday","Tuesday","Wedneday","thursday","friday","saturday");
if(input2>7){
    console.log("Weak out of reach");
}
console.log(Arry2[input2]);

let input3=parseInt(prompt("Enter the 10,100,1000"));

let Arry3=new Array("unit","hundred","thousand");
if(input3>7){
    console.log("out of reach");
}
switch (input3) {
    case 10:
        console.log(Arry3[0]);
        break;
        case 100:
        console.log(Arry3[1]);
        break;case 1000:
        console.log(Arry3[2]);
        break;

    default:
    console.log("out of reach");
        
        break;
}