
let i=0;
let sum=0;
let Arry=[];
console.log("Numbers are : ");
while(i<=5){
let num1=Math.floor(Math.random()*900+100);
Arry.push(num1);
    sum+=num1;
    i++;
}
console.log(Arry);
let newArry=Arry.sort();
console.log(newArry);
console.log("\nSum : "+ sum+"\nAvg : "+(sum/5)+"\nMin :"+newArry[0]+"\nMax :"+newArry[newArry.length-1]);

const March = new Date(2018, 3, 20);
const June = new Date(2018, 6, 20);
let month=prompt("Enter the Month"); 
let date=prompt("Enter the Date");


let MyDate=new Date(2018,month,date);

if (MyDate>March && MyDate<June){
    console.log("Its True");
}else{
    console.log("Its False");
}
document.querySelector("#head").innerHTML="Eenter Date"+MyDate;

let flip=Math.floor(Math.random()*2);
if(flip==0){
    console.log("head");
}else if(flip==1){
    console.log("tail");
}
else{
    console.log("error");

}

let year=parseInt(prompt("Enter The Leap Year"));
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
        alert("Leap Year");

        }else{
    alert("not leap year");

        }

    }else{
        alert("Leap Year");
    }
}else{
    alert("not leap year");
}