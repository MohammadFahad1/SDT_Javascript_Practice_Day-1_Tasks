let arr = [10, 20, 20, 30, 40, 50, 50];
let unique = [];
arr.forEach((element) => {
  if (!unique.includes(element)) {
    unique.push(element);
  }
});

console.log(unique);
