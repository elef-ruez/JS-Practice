// //----------------------------------------------Task 1----------------------------------------------
// //We have the array with elements [2, 3, 4, 5]. 
// //Use the loop “for” to find the product of the elements of this array. 
// //Also implement tasks through “while” loop .

// const arr = [2,3,4,5];

// //--------------------"for" loop
// let product1 = 1; 
// for (i = 0; i < arr.length; i++){
//   product1 = product1 * arr[i];
// }
// console.log("Product found using 'for' loop is " + product1);

// //--------------------"while" loop
// let product2 = 1;
// let j = 0;
// while (j < arr.length)
// { 
//  product2 = product2 * arr[j];
//  j++;
// }
// console.log("Product found using 'while' loop is " + product2);


// //----------------------------------------------Task 2----------------------------------------------
// //Write JavaScript “for” loop that will iterate from 0 to 15. 
// //For each iteration, it will check whether the current number is even or odd and display a message on the screen.
// //Sample Output: 
// //"0 is even" 
// //"1 is odd" "2 is even"

// for( i = 0; i <= 15; i++){
//     if (i%2 === 0){
//         console.log(i + " is even");    
//     }
//     else console.log(i + " is odd");
// }
    

// //----------------------------------------------Task 3----------------------------------------------
// //Write a function randArray ( k ) that will fill an array of k random integers. 
// //Random numbers are generated from the range 1-500.
// //Sample Output :
// //randArray ( 5 ); // [ 399,310,232,379,40 ]

// function randArray(k) {
//     k = +prompt ("Please enter number of elements you want to get");
//     const arr = new Array();
//     for (i = 0; i < k; i++){
//         let randNumber = Math.floor(Math.random() * 501);
//         arr[i]=randNumber;
//     }
//    console.log(arr);
// }
// randArray();


// //----------------------------------------------Task 4----------------------------------------------
// //Write the function raiseToDegree(a, b), which returns the result of raising the number a to the power of b. 
// //The function works only with integers. 
// //Implement the interface for entering numbers a , b from the keyboard.
// //Sample Output :
// //raiseToDegree ( 3 , 4 ); // 81

// function raiseToDegree(a, b) {
//     a = +prompt ("Please enter an integer number you want to raise to degree");
//     b = +prompt ("Please enter the dergee");
//     console.log(`Number ${a} raised to the power of ${b} equals ` + a ** b);
// }
// raiseToDegree();


// //----------------------------------------------Task 5----------------------------------------------
// //Implement the findMin() function , which should accept an arbitrary number of numeric arguments and return the one with the smallest value. 
// //Tip: you can use the special arguments array for the solution.
// //Sample Output :
// //findMin (12, 14, 4, -4, 0.2); // => - 4

// function findMin() {
//            let  minValue = arguments[0];
//         for (i = 0; i <= arguments.length; i++)
//             {
//                       if (minValue > arguments[i])
//                 {
//                     minValue = arguments[i];
//                 }
//                 else {minValue = minValue;                }
//            }
//            console.log(minValue);
// }
//     findMin(12, 14, 4, -4, 0.2)

// //----------------------------------------------Task 6----------------------------------------------
// //Write the function findUnique(arr), which accepts an array “arr” and checks if all elements of array are unique ( no doubles ), 
// //then function will return true if all elements are unique, otherwise - false.
// //Sample Output :
// //findUnique ([1, 2, 3, 5, 3]); // => false
// //findUnique ([1, 2, 3, 5, 11 ]); // => true

// function findUnique(arr)
// {
//        const unique = [];
//     for (let i of arr)
//    {if (!unique.includes(i))
//         {
//      unique.push(i);
//          }
//          result = arr.length === unique.length;
//         }       
// console.log(`Array [${arr}] contains unique values: ${result}`); 
// }

// findUnique([1, 2, 3, 5, 3]);
// findUnique([1, 2, 3, 5, 11]);

// //----------------------------------------------Task 7----------------------------------------------
// //Write a function that returns the last element of an array. The function can accept 2 parameters: 
// //the 1st array, the 2nd numerical parameter corresponding to the number of "x" of the last elements of the array to be output.
// //Sample Output:
// //console.log(last Elem ([ 3 , 4 , 1 0, - 5 ])); // - 5 
// //console.log(last Elem ([ 3 , 4 , 1 0, - 5 ], 2 )); // [ 1 0, - 5 ] 
// //console.log(last Elem ([ 3 , 4 , 1 0, - 5 ], 8 )); // [ 3 , 4 , 1 0, - 5 ]

// function lastElements(arr, x)
// {
//      newArr = [];
// if (x > 1 && x <= arr.length)
// {
// newArr = arr.splice(-x); 
// console.log(`Last element(s): [${newArr}]`);
// }
// else if(x === null || x === undefined || x <= 1)
// {
// console.log(`Last element(s) ${arr[arr.length-1]}`);
// }
// else {console.log(`Last element(s): [${arr}]`);}
// }
// lastElements([3, 4, 10, - 5]);
// lastElements([6, 8, 3, 4, 10, - 5], 2);
// lastElements([3, 4, 10, - 5], 8)

// //----------------------------------------------Task 8----------------------------------------------
// //Write a function that takes a string as an argument and converts the first letter of each word of the string to uppercase.

// function convertFitstLettersToUpperCase(string){
//   wordsArr = string.split(" ");
  
//   function convertToUpper(word) {
//     const lettersArr  = word.split("");
//     lettersArr[0] = lettersArr[0].toUpperCase(); 
//     let upperCaseWords = lettersArr.join("");
//     return upperCaseWords
//   }

//   finalArr = wordsArr.map(convertToUpper);
//   result = finalArr.join(" ");
//   console.log(result);
// }

// convertFitstLettersToUpperCase("i love java script")