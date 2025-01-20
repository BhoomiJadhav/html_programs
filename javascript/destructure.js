const person = {
  name: "Sanket",
  age: 19,
  email: "sanket08@gmail.com",
};
console.log(`person name : ${person.name}`);
console.log(`person age : ${person.age}`);
console.log(`person email : ${person.email}`);//st1

//adding object destructure
const { name, age, email } = person;
console.log(name + " " + age + " " + "email");
//st2