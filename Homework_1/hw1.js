// //-------------------------------Task 2
// //
// console.log("Alfiorova")

// //-------------------------------Task 3
// // a ) declare two variables;
// // b ) write any values in the variable;
// // c ) display the values of the variables on the screen;
// // d ) copy the value of one variable to another;
// // e ) display the values of the variables on the screen.

// let var1 = "Polina";
// let var2 = "QC Engineer";
// console.log(var1, var2);
// var1 = var2;

// //-------------------------------Task 4
// //Create an object with the following 5 properties : 
// //“ String ”, “ Number ”, “ Boolean ”, “ Undefined ”, “ Null ” . 
// //The value of each property must correspond to the corresponding primitive data type.
// const employee = {
//     firstAndLastName:"Polina Alfyorova",
//     currentLengthOfService: 3,
//     isActive: true,
//     endOfContract: undefined,
//     languageCourseCertificate: null
// }

// //--------------------------------Task 5
// //Using the confirm() function, ask the user a question about reaching the age of majority. 
// //Record the result in the isAdult variable and output it to the console.

// let age=confirm("Have you reached the age of majority?")
// let isAdult = age;
// console.log(isAdult);

// //--------------------------------Task 6
// //In an external file, write a script in which you declare variables to store the following data:
// //- your name is
// //- your last name
// //- study group
// //- your year of birth .
// //Assign the appropriate values to the variables.
// //Create and initialize a boolean variable to store your marital status.
// //Determine the type of each variable.
// //Display the values of the variables in the console , according to their type , in the following order : Number , Boolean , String .
// //Create 2 arbitrary variables of type Null and Undefined respectively . Output their type to the console.

// let firstName = "Polina";
// let lastName = "Alfiorova";
// let studyGroup = "JS for TA FastTrack Retraining [QC Group]";
// let yearOfBirth = 1981;
// let isMarried = false;
// console.log(typeof yearOfBirth);
// console.log(typeof isMarried);
// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof studyGroup);

// let nullType = null;
// let undefinedType;
// console.log(typeof nullType);
// console.log(typeof undefinedType);

// //---------------------------------Task 7
// //Using the prompt() function, write a script that sequentially asks the user for a login, email, and password, and displays a message with the entered data on the screen. 
// //For example, "Dear User, your email is usermale@gmail.com, your password is qwerty ."
// let login = prompt("Please enter your login");
// let email = prompt("Please enter your email address");
// let password = prompt("Please enter your password");
// console.log('Dear ' + login + ', your email is ' + email + ' and your password is ' + password);
// console.log(`Dear ${login}, your email is ${email} and your password is ${password}`);

// //----------------------------------Task 8
// //Write a script that calculates the number of seconds in an hour , in a day , in a month , 
// //records the results in the corresponding variables, and displays their values on the screen.
// let sec_in_hour = 60;
// let sec_in_day = sec_in_hour * 24;
// let days_in_month = prompt("Please enter number of days in current month")
// let sec_in_month = days_in_month * sec_in_day;
// console.log(`Seconds in 1 hour: ${sec_in_hour} \nSeconds in 1 day: ${sec_in_day} \nSeconds in current month: ${sec_in_month}`);
