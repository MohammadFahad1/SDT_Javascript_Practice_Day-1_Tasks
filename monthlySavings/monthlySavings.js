const monthlySavings = (payments, livingCost) => {
  if (Array.isArray(payments) && !isNaN(livingCost)) {
    let sum = 0;
    for (let i = 0; i < payments.length; i++) {
      if (payments[i] >= 3000) {
        payments[i] = payments[i] - (payments[i] / 100) * 20;
      }
      sum += payments[i];
    }
    let savings = sum - livingCost;
    if (savings >= 0) {
      console.log(savings);
      return savings;
    } else {
      console.log("earn more");
      return "earn more";
    }
  } else {
    console.log("invalid input");
    return "invalid input";
  }
};

const payments = [1000, 2000, 3000],
  livingCost = 5400;

// const payments = [1000, 2000, 2500],
//   livingCost = 5000;

// const payments = [900, 2700, 3400],
//   livingCost = 10000;

// const payments = [900, 2700, 3400],
//   livingCost = 100;

// monthlySavings(livingCost, payments);

monthlySavings(payments, livingCost);
