async function displayInfo() {
  x = (await 10) + 20;
  return x;
}

let result = displayInfo();
result
  .then((data) => {
    //then stand for true
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
