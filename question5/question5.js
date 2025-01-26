let nums = [];
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 || i % 5 == 0) nums.push(i);
}

console.log(...nums);
