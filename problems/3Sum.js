//Psuedo code
/* 3 sum is a question where we have to find the 3 elements with the given sum .
step 1 : We are going to run nested for loops and the loop will be starting from i =0; for the first one and for the second its going to start from j = i +1 and for the last loop it will be k = j + 1;
step 2 : we will use conditions to match the sum with sum of 3 elements */

let arr = [1, 2, 3, 4, 5];
let sum = 12;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      if (arr[i] + arr[j] + arr[k] === sum) {
        console.log(arr[i], arr[j], arr[k]);
      }
    }
  }
}
