const console = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Decision Making (if-else and switch):

/*
 Leap Year Checker: Create a function that takes a year as input and determines
 whether it is a leap year or not. Leap years are divisible by 4, but not by 100
 unless they are also divisible by 400.
*/

function isALeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}

function isALeapYearSwitch(year) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  switch (isLeap) {
    case true:
      return `${year} is a leap year`;
    default:
      return `${year} is not a leap year`;
  }
}

/*
Ticket Pricing: Write a program that prompts the user to enter their age and 
then determines the price of a movie ticket based on the following criteria:
Children (age <= 12): $10
Teenagers (age 13-17): $15
Adults (age >= 18): $20
*/

async function ticketPricing() {
  var age = Number(await prompt('Enter your age: '));

  if (age <= 12) {
    return `The ticket price is $10.`;
  } else if (age <= 17) {
    return `The ticket price is $15.`;
  } else {
    return `The ticket price is $20.`;
  }
}

async function ticketPricingSwitch() {
  var age = Number(await prompt("Enter your age: "));
  var price;

  switch (true) {
    case (age <= 12):
      price = 10;
      break;

    case (age <= 17):
      price = 15;
      break;

    default:
      price = 20;
      break;
  }

  return `The ticket price is $${price}.`;
}

/*
Weather Clothing Adviser: Develop a program that asks the user for the current 
temperature and whether it is raining or not. Based on this information, advise
the user on what clothing to wear.
*/

async function weatherAdviser() {
  const temperature = Number(await prompt("Enter temperature: "));
  const rain = (await prompt("Is it raining? (yes/no): ")).toLowerCase();

  let advice;

  if (temperature < 10) {
    advice = "Wear a warm coat";
  } else if (temperature < 20) {
    advice = "Wear a jacket";
  } else {
    advice = "Wear light clothes";
  }

  if (rain === "yes") {
    advice += " and take an umbrella";
  }

  console.log(advice);
}

async function weatherAdviserSwitch() {
  const temperature = Number(await prompt("Enter temperature: "));
  const rain = (await prompt("Is it raining? (yes/no): ")).toLowerCase();

  let category;
  let advice;

  switch (true) {
    case (temperature < 10):
      category = "cold";
      break;

    case (temperature < 20):
      category = "mild";
      break;

    default:
      category = "hot";
      break;
  }

  switch (category) {
    case "cold":
      advice = "Wear a warm coat";
      break;

    case "mild":
      advice = "Wear a jacket";
      break;

    case "hot":
      advice = "Wear light clothes";
      break;
  }

  if (rain === "yes") {
    advice += " and take an umbrella";
  }

  console.log(advice);
}

// Recursion

/* Fibonacci Sequence: Implement a recursive function to generate the nth 
Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent
number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).
*/

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
Palindrome Checker: Create a recursive function to check if a given string is a
palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and 
capitalization.
*/

function isPalindrome(str) {
  // Nettoyer la chaîne : garder uniquement les caractères alphanumériques et mettre en minuscules
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  function check(left, right) {
    // Cas de base : si les indices se croisent ou se rencontrent
    if (left >= right) return true;

    // Si les caractères ne correspondent pas
    if (cleanStr[left] !== cleanStr[right]) return false;

    // Appel récursif
    return check(left + 1, right - 1);
  }

  return check(0, cleanStr.length - 1);
}
/*
Power Function: Write a recursive function to calculate the result of raising a number to a given power.
*/
function powerRecursion(pow, number) {
  if (pow === 0) {
    return 1;
  }
  return number * powerRecursion(pow - 1, number);
}

function displayMenu() {
  console.log(`
==============================
   JS EXERCISES MENU
==============================

1. Leap Year Checker
2. Ticket Pricing
3. Weather Adviser
4. Fibonacci (recursive)
5. Palindrome Checker
6. Power (recursion)
7. Exit
`);
}

async function runProgram() {
  while (true) {
    displayMenu();

    const choice = parseInt(await prompt("Enter your choice: "));

    switch (choice) {
      case 1:
        {
          const year = Number(await prompt("Enter a year: "));
          console.log(isALeapYear(year));
        }
        break;

      case 2:
        {
          const result = await ticketPricingSwitch();
          console.log(result);
        }
        break;

      case 3:
        {
          await weatherAdviserSwitch();
        }
        break;

      case 4:
        {
          const n = Number(await prompt("Enter n: "));
          console.log(`Fibonacci(${n}) = ${fibonacci(n)}`);
        }
        break;

      case 5:
        {
          const text = await prompt("Enter a sentence: ");
          console.log(isPalindrome(text));
        }
        break;

      case 6:
        {
          const number = Number(await prompt("Enter base number: "));
          const power = Number(await prompt("Enter power: "));
          console.log(powerRecursion(power, number));
        }
        break;

      case 7:
        console.log("Exiting program...");
        rl.close();
        return;

      default:
        console.log("Invalid choice. Try again.");
    }
  }
}

runProgram();