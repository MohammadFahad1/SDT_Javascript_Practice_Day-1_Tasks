const input_field = document.getElementById("input-field");
input_field.addEventListener("keyup", () => {
  const output = document.getElementById("output");

  if (input_field.value.length < 4 || input_field.value.length > 4) {
    output.innerHTML = `Please enter a valid year.`;
    console.clear();
    return;
  }
  if (!input_field.value) {
    console.clear();
    output.innerHTML = "";
    return;
  }
  if (
    parseInt(input_field.value) % 4 == 0 ||
    parseInt(input_field.value) % 400 == 0 ||
    parseInt(input_field.value) % 100 == 0
  ) {
    output.innerHTML = `${input_field.value} is a <mark><b>Leap</b></mark> year.`;
    console.log(`${input_field.value} is a leap year.`);
  } else {
    output.innerHTML = `${input_field.value} is not a <mark><b>Leap</b></mark> year.`;
    console.log(`${input_field.value} is not a leap year.`);
  }
});
