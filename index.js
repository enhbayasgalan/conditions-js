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
//       if string length is equal to 1 return the string has 1 characterlet 
let str1 = 45
let length1= str1.length;
if (length1>10) {
 console.log('the string more than 10 characters')
}else if (length1>5) {
 console.log("the string more than 5 characters")
}else if (length1<1) {
 console.log("nothing")
}else{
 console.log(length1)
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
const role = 45
if (role == "employee"){
  console.log("hello");
}else if (role == "director"){
  console.log("greetingas");
}else if (role == "")
  console.log("please provide role");
else{
  console.log("hi")
}
 
// Exercise 8 j
 
// 0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,
// бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.
// Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
const price = 50000
if (5000<=price && 30000>=price){
  let nemeh = price*1.15
  console.log(nemeh)
}else{
  let nemeh = price*1.2
  console.log(nemeh)
}
 let nemeh = price*3000
 console.log(nemeh);

 // 1. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.
//      let i = 4 > 3; //true
//      let iii = 4 < 3; //false
//      let ii = 4 >= 3;
//      let iv = 4 <= 3;
//      let v = 4 == 4;
//      let vi = 4 === 4;
//      let vii = 4 != 4;
//      let iix = 4 !== 4;
//      let ix = 4 != "4";
//      let x = 4 == "4";
//      let xi = 4 === "4";
// 2. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.
//      let one = 4 > 3 && 10 < 12;
//      let two = 4 > 3 && 10 > 12;
//      let three = 4 > 3 || 10 < 12;
//      let four = 4 > 3 || 10 > 12;
//      let five = !(4 > 3);
//      let six = !(4 < 3);
//      let eight = !(4 > 3 && 10 < 12);
//      let nine = !(4 > 3 && 10 > 12);
//      let ten = !(4 === "4");
 
// 1. Өгөгдсөн жилийг өндөр жил мөн эсэхийг шалгаад хэрвээ мөн бол өндөр жил мөн үгүй бол үгүй гэж хариулна уу.
// Өндөр жил гэдэг нь 4 жилд нэг удаа болдог бөгөөд тэр нь 2-р сар 29 хоногтой үед тохиолддог. Энэ нь 4-д хуваагдаж байвал мөн, 100 хуваагдаж байвал өндөр жил биш. Харин 400 жилд бүтнээрээ хуваагдаж байвал мөн.
const year = 2023
if (year%400===0){
  console.log("ondor jil");
}else if(year%100===0){
  console.log("ondor jil bish");
}else if (year%1===0){
  console.log("ondor jil");
}else{
  console.log("ondor jil bish")
}
// 2. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу. Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
// 3. Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
//      1. Бат - 67 оноо, Онц Дүмд - 59 оноо авчээ.
//      2. Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
//          a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
//          b. Хэрвээ оноо 60 - 70 (70 орохгүй) хооронд байвал - Хангалттай
//          c. Хэрвээ оноо 70 - 80 (80 орохгүй) хооронд байвал - Дунд
//          d. Хэрвээ оноо 80 - 90 (90 орохгүй) хооронд байвал - Сайн
//          e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм байна.
let dun = 93
if (60>dun){
  console.log("mash muu")
}else if (60<=dun && 70>dun){
  console.log("hangalltai")
}else if (70<=dun && 80>dun){
  console.log("dund")
}else if (80<=dun && 90>dun){
  console.log("sain")
}else if (90<=dun && 100>dun){
  console.log("mash sain")
}
//      3. Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
//          НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу.
// 4. Өгөгдсөн 2 тооны ихийг олох функц бич.
let numb1=10, numb2=22
if (numb1>numb2){
  console.log("numb2");
}else if (numb1<numb2){
  console.log("numb2");
}
let ih=Math.max(10,20,30)
console.log(ïh);
// 5. Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг (Unitel, Mobicom, G-Mobile, Skytel) хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх
// let phonenumber = 99001234
//  let du = phonenumber 
// if ( du===98, du===90, du===91 ){
//   console.log("mobicom")
// }else if (du===88, du===87, du===80){
//   console.log("unitel")
// }else if (du===92, du===94, du===96){
//   console.log("G-moblie")
// }
// 6. Тэгш өнцөгт гурвалжны 2 суурын урт өгөгдсөн(a, b) бол тухайн гурвалжины налуугын уртыг( c ) ол
// 7. 4 н хувьсаглан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:
//      a=85 b=75 c=96 d=69
//      80-аас их тоонуудын нийлбэрийг: 181
// 8. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа:
//      a=3 b=7 c=2 d=4
//      5-аас бага тоонуудын үржвэр: 24
// 9. if … else ашиглан myAge болон yourAge-ийн утгыг харьцуул. Харьцуулалт дээр үндэслэн үр дүнг консол руу хөгшин (би эсвэл та) гэж тэмдэглэнэ үү. Насыг оруулахын тулд prompt("Насаа оруулна уу:")-г ашиглана уу.
let myage = 1
let yourage = 2
if (myage>yourage){
  console.log("чи")
}
else if (myage<yourage){
  console.log("та")
} 
// 10. Тухайн өгөгдсөн хувьсагчдаас хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү
//      жишээ нь: Input: 120, 33, 10, 12 output: 10

// 11. Өгөгдсөн эерэг тоо нь 3-ын үржвэр эсвэл 7-ын үржвэр эсэхийг шалгана уу
// 12. n тооны утгын дагуу эерэг эсвэл сөрөгийг олж хэвлэнэ.
//      negative
//      positive
let n = 12
let w = 15
if (n=n){
  console.log("negative")
}
else if (w=n){
  console.log("positive")
}
// 13. weight, height гэсэн 2 хувьсагчид утга оруулахад тухайн хэмжээнээс хамааран биеийн жингийн индексийг тооцож тухайн индекс-д харгалзах утгыг хэвлэнэ.
//      Жингийн дутагдалтай
//      Эрүүл
//      Илүүдэл жинтэй
//      Хэт таргаллалттай
let weigth = 96
let height = 180
if(weigth<=96){
  console.log("het targalaltai")
}
// 14. Өгөгдсөн тооны тэгш эсвэл сондгой болохыг хэвлэж харуулна уу
let sondgoi = 2
if (sondgoi == 2){
  console.log("sondgoi")
}
// 15. Нас тооцоолох бодлого: yearOfBirth гэсэн хувьсагчид гараас төрсөн онийг ав. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.
//      0 <= old <= 1 үед "Infant"
//      1 < old <= 3 үед "Toddler"
//      3 < old <= 5 үед "Preschool"
//      5 < old <=12 үед "Gradeschooler"
//      12 <old <= 18 үед "Teen"
//      18 < old <=21 үед "Youngadult"
let old = 2002
if (old<=15){
   console.log("infant")
}