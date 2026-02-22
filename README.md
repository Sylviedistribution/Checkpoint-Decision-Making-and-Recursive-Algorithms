# JavaScript Decision Making and Recursion Exercises

## 📌 Project Overview

This project is a collection of JavaScript functions demonstrating **decision making** using conditional statements and **recursion** techniques.

It was created as a learning exercise to practice fundamental programming concepts.

## 🧠 Implemented Features

### Decision Making Functions

1. **Leap Year Checker**
   - Determines whether a given year is a leap year.
   - A leap year is divisible by 4, not divisible by 100 unless divisible by 400.

2. **Ticket Pricing**
   - Returns movie ticket price based on age:
     - Age ≤ 12 → $10
     - Age 13–17 → $15
     - Age ≥ 18 → $20

3. **Weather Clothing Adviser**
   - Suggests clothing based on temperature.
   - Adds umbrella advice if it is raining.

### Recursion Functions

1. **Fibonacci Sequence**
   - Computes the nth Fibonacci number using recursion.

2. **Palindrome Checker**
   - Checks if a string is a palindrome.
   - Ignores spaces, punctuation, and capitalization.

3. **Power Function**
   - Calculates the result of raising a number to a given power using recursion.

## 🚀 How to Use

1. Clone the repository or copy the JavaScript file.

2. Run the functions in a JavaScript environment such as:

- Browser console
- Node.js

Example:

```javascript
console.log(isALeapYear(2024));
console.log(ticketPricing(15));
console.log(weatherAdviser(25, true));
console.log(fibonacci(6));
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(powerRecursion(3, 4));
```
⚠️ Notes

The recursive Fibonacci implementation is for educational purposes and is not optimized for large inputs.