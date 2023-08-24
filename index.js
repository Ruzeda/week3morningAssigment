function greeting() {
  console.log("Hello World!");
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
      console.log(num + " is even.");
    } else {
      console.log(num + " is odd.");
    }
  }

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

function factorial(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorial(num - 1);
  }

  ruzeda
  
  