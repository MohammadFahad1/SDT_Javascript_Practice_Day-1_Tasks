var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let unique = [];
arr.forEach((element) => {
  if (!unique.includes(element)) {
    unique.push(element);
  }
});

console.log(unique);
