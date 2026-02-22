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

/*
Ticket Pricing: Write a program that prompts the user to enter their age and 
then determines the price of a movie ticket based on the following criteria:
Children (age <= 12): $10
Teenagers (age 13-17): $15
Adults (age >= 18): $20
*/

function ticketPricing(age) {
  if (age <= 12) {
    return `The ticket price is $10.`;
  } else if (age <= 17) {
    return `The ticket price is $15.`;
  } else {
    return `The ticket price is $20.`;
  }
}

/*
Weather Clothing Adviser: Develop a program that asks the user for the current 
temperature and whether it is raining or not. Based on this information, advise
the user on what clothing to wear.
*/

function weatherAdviser(temperature, isRaining) {
  if (typeof temperature !== "number") {
    return "Invalid temperature.";
  }

  let advice;

  if (temperature < 10) {
    advice = "Wear a warm coat";
  } else if (temperature < 20) {
    advice = "Wear a jacket";
  } else {
    advice = "Wear light clothes";
  }

  if (isRaining) {
    advice += " and take an umbrella";
  }

  return advice + ".";
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

function palindromeChecker(n){
    let reverse = "";

    reverse += palindromeChecker(n)
}

function powerRecursion(pow, number) {
    if (pow === 0) {
        return 1;
    }
    return number * powerRecursion(pow -1, number)
}