
// //------------------------------------Task 1----------------------------------------------------
// //There is the following code. 
// //Add the code so that the lines written in the comments appear in the browser console, while operating with the x and y variables.

// let x = 1;
// let y = 2;
// let res1 =  "" + x + y // Add the code, it is necessary to use the variables x and y
// console.log(res1); // "12"
// console.log( typeof res1); // "string"

// let res2 = Boolean(x) + String(y)  // Add code is required use variables x and y
// console.log(res2); // "true2"
// console.log( typeof res2); // "string"

// let res3 = Boolean (x+y)// Add code is required use variables x and y
// console.log(res3); // true
// console.log( typeof res3); // " boolean "

// let res4 = Number(Boolean(x) + String(y)) // Add code is required use variables x and y
// console.log(res4); // NaN
// console.log( typeof res4); // "number"



// //------------------------------------Task 2------------------------------------------------
// //The user enters a number (use prompt ()) . It is necessary to check whether the entered number is correct
// //a ) even m is positive;
// //b ) a multiple of 7.
// //Display the result of the check in the console.

// //-----------Sub-task a)

// let m = prompt("Please enter an even positive number");
// console.log(`You've entered the following number: ${m}`);
// if (m%2 == 0 && m > 0 ){
//     console.log("Variable m is even and is positive");
// }
// else {
//     console.log("Entered number does not meet the requirements: it's either not even or not positive");
// }

// //-----------Sub-task b)

// let a = prompt("Please enter a number");
// console.log(`You've entered the following number: ${a}`);
// if (a%7 == 0 ){
//     console.log("Entered number is a multiple of 7");
// }
// else {
//     console.log("Entered number is NOT a multiple of 7");
// }

// //------------------------------------Task 3-----------------------------------------------
// // Create an empty array;
// // 1) Write any number in the first element of the array;
// // 2) Write any line in the second element of the array;
// // 3) Write any logical value in the third element of the array;
// // 4) Write the value null in the fourth element of the array ;
// // 5) Enter the number of elements stored in the array on the screen;
// // 6) Ask the user to enter any value and write this value in the fifth element of the array;
// // 7) Display the fifth array element on the screen.
// // 8) Delete the 1st element of the array and display the array on the screen.

// const array=[];
// array[0]=25;
// array[1]="Any line :)";
// array[2]= true;
// array[3]=null;
// console.log("The number of elements in the array is " + array.length);
// const m = prompt("Please enter any value");
// array[4]=m;
// console.log(`The 5th element of the array is "${array[4]}"`);
// array.shift();
// console.log(array);

// //------------------------------------Task 4----------------------------------------------------
// // Write a program that combines all existing elements of the array into a ribbon and separates them with the symbol “*”.

// const cities = [" Rome ", " Lviv ", " Warsaw "];
//   console.log(cities.join(' * '));


// //------------------------------------Task 5-----------------------------------------------------
// //Using the prompt () function, ask the user a question about reaching the age of majority. 
// //Record the result in the isAdult variable. 
// //Depending on the received value, display the appropriate message about the person's status. 
// //For example: if the condition is fulfilled, the age is more than 18, output "You have reached the age of majority". 
// //If the age is less than 18 years, display "You are still too young".

// let isAdult=+prompt("Please enter your age in full years");
// if (isAdult>=18 && isAdult<=150){
// console.log("You have reached the age of majority");
// }
// else if(isAdult<18){
//     console.log("You are still too young");
// }
// else {console.log("You have entered incorrect value for age")}

// //------------------------------------Task 6----------------------------------------------------
// //The user enters the three lengths of the sides of the triangle (use prompt() three times to enter each side).
// //Necessary
// //a ) determine and display the area of the triangle in the console
// //b ) check whether this triangle is rectangular and output the check result to the console.
// //Validate whether user-entered values are correct, otherwise display ' Incorrect data '. Output the result of calculating the area of the triangle to the console with an accuracy of 3 decimal places (for example : 8.42355465 = > 8.424).

// let a=+prompt("Please enter the length of the 1st side");
// let b=+prompt("Please enter the length of the 2nd side");
// let c=+prompt("Please enter the length of the 3rd side");

// //-------------Sub-task a)

// let p=(a+b+c)/2; //p is an auxiliary variable for the math formula for triangle area calculation:
// let s=(p**(p-a)**(p-b)**(p-c))**(1/2);
// console.log("Triangle area is " + s.toFixed(3)); 

// //--------------Sub-task b) 

// //Creating a new DESC ordered array to determine the longest side:
// let numbers = [a,b,c];
// numbers = numbers.sort(function(n,m) {
//     return n - m;
//   })
// //console.log(numbers);

// //Assigning assistant variables - so called "legs" and "hypotenuse" - for convenience:
// h = numbers[2];
// l1 = numbers[1];
// l2 = numbers[0];
// // console.log(h, l1, l2);

// //Validating correctness of user entered data:
// if (a>0 && b>0 && c>0)
//     {if (h < l1 + l2) //the longest side should be less than the sum of two other sides in order to form a triangle
//     {
//       console.log('Entered values are valid');
//     }
//       else console.log('Invalid data');
//     }
//     else console.log('Invalid data');

// //Validating if the triangle is rectangular
// if (h > l1 && h > l2)
// {
// sqr_h = h**2;
// sum_sqr_ls = l1**2 + l2**2;
// if (sqr_h === sum_sqr_ls)
// {
//   console.log("The triangle is rectangular");
// }
// else console.log("The triangle is NOT rectangular");}
// else console.log("The triangle is NOT rectangular");


// //------------------------------------Task 7----------------------------------------------------
// //Write a conditional construction that, depending on the time of day, will display the appropriate greeting. 
// //You need to get the real time of day from the system. 
// //Do it in 2 ways through 2 different conditional operators.
// //In the range of hours 23-5 - the greeting " Good night " should be displayed
// //In the range of hours 5-11 - the greeting " Good morning " should be displayed
// //In the range of hours 11-17 - the greeting " Good day " should be displayed
// //In the range of hours 17-23 - the greeting " Good evening " should be displayed.

// let now= new Date();
// let time= now.getHours();
// //console.log(time);

// //-------1st way - using "if"

// if (time >= 5 && time<11){
//     console.log(" Good morning ");
// }
// else if (time >= 11 && time<17){
//     console.log(" Good day ");
// }
// else if (time >= 17 && time<23){
//     console.log(" Good evening ");
// }
// else {console.log(" Good night ");}

// //-------2nd way - using "switch"

// switch (true) {
//     case time>=5 && time<11:
//         console.log(" Good morning ");
//         break;
//     case time >= 11 && time<17:
//         console.log(" Good day ");
//         break;
//     case time >= 17 && time<23:
//         console.log(" Good evening ");
//         break
//     default: console.log(" Good night ");
//         break;
// }

