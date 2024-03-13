// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  //   document.getElementById("sign").innerHTML =
  getSign(numInput);
  // document.getElementById('even-odd').innerHTML =
  evenOrOdd(numInput);
  // document.getElementById('multiple').innerHTML =
  multipleOf10(numInput);
  // document.getElementById('digits').innerHTML =
  numDigits(numInput);
  //**BONUS**//
  //   document.getElementById('prime').innerHTML =
  isPrime(numInput);
}

// Analyze Functions
function getSign(num) {
  if (num > 0) {
    signOut = "Positive";
  } else if (num < 0) {
    signOut = "Negative";
  } else {
    signOut = "Zero";
  }
  console.log(num, signOut);
  document.getElementById("sign").innerHTML = `${signOut}`;
}

function evenOrOdd(num) {
  if (num % 2 == 0) {
    evenoddOut = "Even";
  } else {
    evenoddOut = "Odd";
  }
  console.log(num, evenoddOut);
  document.getElementById("even-odd").innerHTML = `${evenoddOut}`;
}

function multipleOf10(num) {
  if (num % 10 == 0) {
    mult10Out = "Yes";
  } else {
    mult10Out = "No";
    10;
  }
  console.log(num, mult10Out);
  document.getElementById("multiple").innerHTML = `${mult10Out}`;
}

function numDigits(num) {
  let digits = (document.getElementById("digits").innerHTML =
    num.toString().length);
  if (num < 0) {
    digits = document.getElementById("digits").innerHTML =
      num.toString().length - 1;
  }
  return digits;
}

function isPrime(num) {
  // BETWEEN 2 ands square roof of number input
  for (let i = Math.round(Math.sqrt(num)); i > 0; i--) {
    if (num % i === 0 && i != 1) {
      document.getElementById("prime").innerHTML = "Composite";
      return;
    }
  }
  document.getElementById("prime").innerHTML = "Prime";
}
