/* we can remove duplicates using set functions */

let num = [1,2,3,4,5,3,4,5,6,7,8];
 let uniqueArr = [...new Set(num)]
 console.log(uniqueArr);