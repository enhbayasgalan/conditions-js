console.log("hello conditions")

// Exercise 1
// <h3>Write a  which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>
  const giveNumber = ("enter a number");

console.log(typeof"elbeg")

if (giveNumber % 3 == 0 ) {
    console.log("fizz");
} else if (giveNumber % 5 == 0) {
    console.log("buzz");
}

if (giveNumber % 3 == 0 || giveNumber % 5 == 0) {
    console.log("buzz and fizz");
}

if (giveNumber % 3 != 0 || giveNumber % 5 != 0) {
    console.log("NOT bizz/fizz");
}
// Exercise 2
 
// Write a JavaScript conditional statement to find the largest of five numbers.
// check input numbers are the type of number, if not console.log('Invalid inputs
 
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
const a = -5;
const b = -2;
const c = -6;
const d = 0;
const f = -1;

if (a > b && a > c && a > d && a > f) {
  console.log(a);
} else if (b > a && b > c && b > d && b > f) {
  console.log(b);
} else if (c > a && c > b && c > d && c > f) {
  console.log(c);
} else if (d > a && d > c && d > b && d > f) {
  console.log(d);
} else {
  console.log(f);
}
// Exercise 3
 
// Write a JavaScript program that accept two integers and display the larger.
 
// check input numbers are the type of number, if not console.log('Invalid inputs)
 
// Sample numbers : 2,5
// Output : 5

// Exercise 4
 
// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.
 
// Sample numbers : 3, -7, 2
// Output : The sign is -
const x = 3;
const y = -7;
const z = 2;
if (x > 0 && y > 0 && z > 0) {
  alert("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
  console.log("The sign is -");
} else if (x > 0 && y < 0 && z < 0) {
  console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}
// Exercise 5
 
// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator to console.log false, when x is equal to y.
// Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.
 
const n1 = 4;
const n2 = 6;

if (n1>n2){
  console.log("true")
}
  else if (n1 === n2){
    
      console.log("false")
    
  }
  else if (n1 !== n2){
    console.log("not equal")
  }







// Exercise 6
 
// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.
 
const grade = 70
if (grade>80 && grade<90){
  console.log("B");
  
}
else if (grade=>70 && grade<80){
  console.log("C");

  
}
// Exercise 10 j
// Write If statement that takes string
//     if string length is more than 10 print the string  has more than 10 characters
//      if string length is more than 5 return the string has more than 5 characters
//       if string length is less than 1 return the string has nothing
//       if string length is equal to 1 return the string has 1 character
const length = 10
if (length == "string"){
   console.log("12");
   
}
// Exercise 7 j
 
//  3) Write conditional expressions to satisfy the following safety rules:
 
//  a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
 
//  b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
 
//  c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
 
// Write If statement that takes number checks if the number is odd or even
 
//     if odd return "the number is odd"
//     if even return "the number is even"
 
// Exercise 8 j
 
// Write if statement that takes role and return each role with greeting
 
//     if role is 'Employee' return 'Hello'
//     if role is 'Director' return 'Greetings'
//     if role is '' return 'Please provide role'
//     else return 'Hi';
const employee = hello 
 
// Exercise 8 j
 
// 0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,
// бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.
// Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
