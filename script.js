// EX: شکل زیر رو در کنسول چاپ کنید
// Ex: 1xp
// *
// **
// ***
// ****
// *****

//Define variables 

let star = "*" , output;

// Define a for loop repeat count

for (let i = 1; i <= 5 ; i++) {
   
    output = star.repeat(i);
    console.log(output);
}
// Ex: حالا اینارم ادامش چاپ کنه
// Ex: 1xp
// ****
// ***
// **
// *
//
for (let i = 1;  i <= 5 ; i++) {
   
    output = star.repeat(5-i);
    console.log(output);
}