// 1-masala

// let n = +prompt("oy raqamini kiriting");
// let res = "";
// switch (n) {
//   case 1:
//     res = "Yanvar";
//     break;

//   case 2:
//     res = "Fevral";
//     break;

//   case 3:
//     res = "Mart";
//     break;

//   case 4:
//     res = "Aprel";
//     break;

//   case 5:
//     res = "May";
//     break;

//   case 6:
//     res = "Iyun";
//     break;

//   case 7:
//     res = "Iyul";
//     break;

//   case 8:
//     res = "Avgust";
//     break;
//   case 9:
//     res = "Sentiyabr";
//     break;
//   case 10:
//     res = "Oktiyabir";
//     break;
//   case 11:
//     res = "Noyabir";
//     break;
//   case 12:
//     res = "Dekabir";
//     break;

//   default:
//     res = "bunday oy yuq";
//     break;
// }

// document.write(res);

// 2-masala

// let n = +prompt("Oylar raqimini kiritng");
// let res = "";
// switch (n) {
//   case 1:
//     res = "Qish";
//     break;

//   case 2:
//     res = "Qish";
//     break;

//   case 3:
//     res = "Bahor";
//     break;

//   case 4:
//     res = "Bahor";
//     break;

//   case 5:
//     res = "Bahor";
//     break;

//   case 6:
//     res = "Yoz";
//     break;

//   case 7:
//     res = "Yoz";
//     break;

//   case 8:
//     res = "Yoz";
//     break;
//   case 9:
//     res = "Kuz";
//     break;
//   case 10:
//     res = "Kuz";
//     break;
//   case 11:
//     res = "Kuz";
//     break;
//   case 12:
//     res = "Qish";
//     break;

//   default:
//     res = "bunday fasil yuq";
//     break;
// }

// document.write(res);

// 3-masala

// let num = +prompt("Soni kiriting");

// for (let i = 2; i < num; i++) {
//   let tub = true;
//   for (let k = 2; k < i; k++) {
//     if (i % k == 0) {
//       tub = false;
//       break;
//     }
//   }

//   if (tub == true) {
//     console.log(i);
//   }
// }

// 4-masala

// let son = +prompt("Inputlar soni");
// let sum = 0;

// for (let i = 0; i <= son; i++) {
//   let num = +prompt(`${i}-sonni kiriting`);
//   sum += num;
// }
// console.log(sum);

// 5-masala

// let n = +prompt("ixtiyori son");
// for (let i = n; i > 0; i--) {
//   console.log(i);
// }

// 6-masala

// let son = 5; // Test uchun son
// let factorial = 1;

// for (let i = 2; i <= son; i++) {
//   factorial *= i;
// }
// console.log(factorial);

// 7-masala

let number1 = +prompt("Sonni kiriting");
let sum = 0;
for (let i = 1; i <= number1; i++) {
  sum = sum + i;
}
console.log(sum);
