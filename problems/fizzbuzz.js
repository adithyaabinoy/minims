/*create a fizzbuzz function whch will take number parameter and based on that number we will apply conditions like num % 3 == 0 return buzz
and so on for other conditions 
*/

let num = 10;
function fizzbuzz() {
if(num % 3 == 0) {
return "buzz";
}
if(num % 5 == 0) {
return "fizz"
}
if(num % 15 == 0) {
return "fizzbuzz"
}
return num;
}

let result = fizzbuzz(num)
console.log(result)

