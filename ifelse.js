let prompt = require ('prompt-sync')();

// let age = Number(prompt ("enter your age "));

// if (age>=18){
//     console.log("you are eligible for voting");
// }
// else{
//     console.log("you are not eligible for voting");
// }

// let marks = Number(prompt("enter your marks "));

// if (marks>90 && marks <100) console.log("A+");
// else if (marks >80 && marks <=90) console.log ("A");
// else if (marks >70 && marks <=80) console.log ("B");
// else if (marks >60 && marks <=70) console.log ("C");
// else if (marks >50 && marks <=60) console.log ("D");
// else if (marks >40 && marks <=50) console.log ("E");
// else if(marks >30 && marks <=40) console.log ("F");
// else {console.log("dont come to school MF boyieee")}

// let a = Number(prompt("enter a number "));
// let b = Number (prompt ("enter a munber"));

// if (a>b) console.log("a is greater than b");
// else { console.log("b is greater then a ")}

// let a= Number(prompt("enter a number "));

// if (a%2==0) console.log("even number");
// else {console.log("odd number ")};

// let a= Number(prompt("enter a number "));
// let b= Number(prompt("enter a number "));
// let c= Number(prompt("enter a number "));

// if (a>b && a>c) console.log("a is greater then b and c");
// else if (b>a && b>c) console.log("b is greater then a and c");
// else if (c > a && c> b ) console.log (" c is greater then a and b");

// let year = Number (prompt ("enter a year "));

// if (year%4==0 && year %100 !=0 || year %400==0) console.log ("leap year ");
// else {console.log("not a leap year")}

// let amount = prompt ("enter your amount ")

// if (amount>0 && amount <=5000){
//     console.log("payable amount is " + amount );
// } 
// else if (amount>5001 && amount <=7000){
//     console.log("payable amount is " + (amount-(amount*5/100)));
// }
// else if (amount>7001 && amount <=9000){
//     console.log("payable amount is " + (amount-(amount*10/100)));
// }
// else {
//     console.log("payable amount is " + (amount-(amount*20/100)));
// }

// let unit = Number(prompt("enter your unit "));

// if (unit>0 && unit <=100){
//     console.log("payable amount is " + (unit*4.2));
// }
// else if (unit>100 && unit <=200){
//     console.log("payable amount is " + ((100*4.2) + ((unit-100)*6)));
// }
// else if (unit>200 && unit <=400){
//     console.log("payable amount is " + ((100*4.2) + (100* 6)+(unit-200)*8));
// }
// else if (unit>400) console.log("payable amount is " + ((100*4.2) + (100* 6)+(200*8)+(unit-400)*13));
// let amount =0;
// if (unit>400){
//     amount=(unit -400)*13
//     unit= 400
// }
// if (unit>200 && unit <=400){
//     amount= amount+(unit -200)*8 ;
//     unit = 200
// }
// if (unit>100 && unit <=200){
//     amount= amount+(unit -100)*6 ;
//     unit =100
// }
 
// amount = amount + (unit*4.2);

// console.log("payable amount is " + amount);

// let month = Number (prompt("enter your month "));
// let year = Number (prompt("enter your year "));
// let days= 0;

// if (month==2) {
//     if (year%400==0 || year%4==0 && year%100!=0){
//         days = 29;
//     }else days =28;
// }
// else if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
//     days = 31;
// }
// else days =30;

// console.log(days);