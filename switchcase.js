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


let n = prompt("enter a string value: ");
let consonent=0 , vowel=0;

for (let i=0; i < n.length; i++){
    let ch= n.charAt(i);
    switch(ch){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u': vowel++;
        break

        default : consonent++;
    }

}
console.log("consonent " + consonent );
console.log("vowel "+ vowel);
