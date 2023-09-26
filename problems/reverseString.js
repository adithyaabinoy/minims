/* 
step 1 : we used reverse for loop over the string 
> pushed all the reversed elements inside an empty string.
*/

let reverseStr = "hello world";
let result = "";
for(let i=reverseStr.length-1; i>=0; i--) {
result += reverseStr[i];
}
console.log(result);