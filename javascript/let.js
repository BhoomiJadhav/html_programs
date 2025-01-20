// for (var a = 0; a <= 5; a++) {
//   console.log("a value is=" + a); //here scope of a variable is local
// }

// console.log("a value is=" + a); //here scope of a variable is global

for (let a = 0; a <= 5; a++) {
  console.log("a value is=" + a); //here scope of a variable is local
}

console.log("a value is=" + a); //variable doesnt access outside
