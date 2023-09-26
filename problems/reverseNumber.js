/*We have two approach 
step 1 : by using inbuilt functions, where we will change the number into string by using toString() function .
> Next we will change the string into array by using split() function.
> Then we will use reverse() function to reverse the array of elements .
> After reversing array we are going to change into string using join() function .
> Then we will change the string into number by using parseInt() function . 

step 2 : 
> After changing into string we are going to use reverse for loop.
>Pushing every element into an empty string
>then we will change the string into number using parseInt() function .
*/

//1st approach
let num = 123456;
 let numStr = num.toString();
 let result=numStr.split("").reverse().join("");
 console.log(parseInt(result));
 
//2nd approach
 let reverseStr = "";
 for(let i=numStr.length - 1; i>=0; i--) {
 reverseStr += numStr[i];
 }
 console.log(parseInt(reverseStr));
 
