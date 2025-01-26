const input_field = document.getElementById("input-field");
input_field.addEventListener("keyup", () => {
  const output = document.getElementById("output");
  if (!input_field.value) {
    console.clear();
    output.innerHTML = "";
    return;
  }
  if (parseInt(input_field.value) % 2 == 0) {
    output.innerHTML = `${input_field.value} is an <mark><b>Even</b></mark> number.`;
    console.log(`${input_field.value} is an Even number.`);
  } else {
    output.innerHTML = `${input_field.value} is an <mark><b>Odd</b></mark> number.`;
    console.log(`${input_field.value} is an Odd number.`);
  }
});
