let prompt = require ("prompt-sync")();

// let n =Number(pompt("Enter n number: "));

// switch(n){
//     case 1:
//     case 3:{
//         console.log("hello world")
//     break
// }
//     case 2:{
//         console.log("Tu")
//         break
// }
// case 4:{
//         console.log("Thursday")
//         break
// }
// default: console.log("invaild");
// }


// let n = prompt("enter a string value: ");
// let consonent=0 , vowel=0;

// for (let i=0; i < n.length; i++){
//     let ch= n.charAt(i);
//     switch(ch){
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u': vowel++;
//         break

//         default : consonent++;
//     }

// }
// console.log("consonent " + consonent );
// console.log("vowel "+ vowel);

console.log("enter 1 for area of rectangle");
console.log("enter 2 for area of square");
console.log("enter 3 for area of triangle");

let n = Number(prompt ());


switch(n){
    case 1:{
        let l=Number(prompt("enter length"))
        let b = Number(prompt("enter breath"))
        console.log(l*b);
        break
    }

case 2:{
       let side=Number(prompt("enter side"))
       console.log(side * side);
       break
}
case 3:{
       let height=Number(prompt("enter height"))
        let base = Number(prompt("enter base"))
        console.log((base *height)/2);
        break
}
default: console.log("invaild");
}