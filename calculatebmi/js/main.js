function calculateBmi(height, weight) {
  height = height / 100;
  let result = weight / (height * height);
  return result.toFixed(2);
}

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearResult();

  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  if (height.trim() === "" || weight.trim() === "") {
    // document.querySelector("#result").innerHTML = "Plese Enter Input";
    alert("Plese Enter Input");
    return false;
  }
  if (height <= 0 || weight < 0) {
    alert("Please Enter A Valid Number");
    return false;
  }

  height = parseInt(height);
  weight = parseInt(weight);

  if (isNaN(height) || isNaN(weight)) {
    alert("Please Enter A Number");
    return false;
  }

  document.querySelector("#result").innerHTML = calculateBmi(height, weight);
});

document.querySelector("input#height").addEventListener("keydown", clearResult);
document.querySelector("input#weight").addEventListener("keydown", clearResult);

function clearResult() {
  document.querySelector("#result").innerHTML = "";
}
