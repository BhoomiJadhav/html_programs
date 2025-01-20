const add = (a = 10, b) => {
  return a + b;
};

console.log(add(20, 40));

const add1 = (a, b = 20) => {
  return a + b;
};

console.log(add1(20));
