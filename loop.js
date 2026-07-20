//for 

let prompt = require('prompt-sync')();

// let n = Number (prompt("enter a number "))

// for (let i =1 ; i <=n ; i++){
//     console.log("hello world");
// }

let n = Number(prompt("enter number"));
let count=0;
for(let i=1;i<=n;i++){
    if (n%i==0) count++;
}

if (count==2) console.log("prime number");
else console.log("not prime number");