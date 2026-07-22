//for 

let prompt = require('prompt-sync')();

// let n = Number (prompt("enter a number "))

// for (let i =1 ; i <=n ; i++){
//     console.log("hello world");
// }

// let n = Number(prompt("enter number"));
// let count=0;
// for(let i=1;i<=n;i++){
//     if (n%i==0) count++;
// }

// if (count==2) console.log("prime number");
// else console.log("not prime number");

// let num = 12345;
// let reverse = 0;

// while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
// }

// console.log(reverse);

let num = 121;
let original = num;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

if (original === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}