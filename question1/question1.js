/* 
0 - 39 =  C
40 - 59 = B
60 - 69 = A-
70 - 79 = A
80 - 100 = A+
*/

var result = 80;
if (result < 0) {
  console.log("failed");
} else if (result >= 0 && result <= 39) {
  console.log("tumi C grade paiso");
} else if (result >= 40 && result <= 59) {
  console.log("tumi B grade pasiso");
} else if (result >= 60 && result <= 69) {
  console.log("tumi A- grade paiso");
} else if (result >= 70 && result <= 79) {
  console.log("tumi A grade paiso");
} else if (result >= 80 && result <= 100) {
  console.log("tumi A+ grade paiso");
} else {
  console.log("invalid");
}
