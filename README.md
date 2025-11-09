# JavaScript Exercises

A collection of JavaScript exercises covering various programming concepts including functions, variables, conditionals, arrays, and more.

## 📋 Table of Contents

- [Exercises](#exercises)
  - [1. Life in Weeks Calculator](#1-life-in-weeks-calculator)
  - [2. Milk Bottles Function](#2-milk-bottles-function)
  - [3. BMI Calculator](#3-bmi-calculator)
  - [4. BMI Calculator (Interactive)](#4-bmi-calculator-interactive)
  - [5. Love Calculator](#5-love-calculator)
  - [6. Love Compatibility Calculator](#6-love-compatibility-calculator)
  - [7. Leap Year Identifier](#7-leap-year-identifier)
  - [8. Guest List Checker](#8-guest-list-checker)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)

## Exercises

### 1. Life in Weeks Calculator

**Function:** `lifeInWeeks(age)`

Calculates and displays how many days, weeks, and months you have left if you live until 90 years old.

**Concept:** Variables, arithmetic operations, console.log

**Example:**
```javascript
lifeInWeeks(25);
// Output: "You have 23725 days, 3380 weeks, and 780 months left."
```

---

### 2. Milk Bottles Function

**Function:** `getMilk(money)`

Simulates going to the store to buy milk bottles. Calculates how many bottles can be purchased with the given money and returns the change.

**Helper Functions:**
- `calcBottles(startingMoney, costPerBottle)` - Calculates the number of bottles
- `calcChange(startingAmount, costPerBottle)` - Calculates the change

**Concept:** Functions, return values, Math.floor, modulo operator

**Example:**
```javascript
getMilk(7); // With $7 and $1.5 per bottle
// Returns change amount
```

---

### 3. BMI Calculator

**Function:** `bmiCalculator(weight, height)`

Calculates Body Mass Index (BMI) using the formula: `weight / (height * height)`

**Concept:** Functions, arithmetic operations, Math.round

**Example:**
```javascript
var bmi = bmiCalculator(65, 1.8); // Returns rounded BMI
```

---

### 4. BMI Calculator (Interactive)

**Function:** `bmiCalculator(weight, height)`

An interactive version that prompts the user for weight and height, then provides BMI classification:
- Underweight: BMI < 18.5
- Normal weight: BMI 18.5 - 24.9
- Overweight: BMI > 24.9

**Concept:** Functions, conditionals (if/else), user input with prompt()

**Example:**
```javascript
// Prompts user for weight and height
// Returns: "Your BMI is X, so you are [underweight/normal weight/overweight]."
```

---

### 5. Love Calculator

**Function:** `loveCalculator()`

A fun calculator that generates a random love percentage between two people based on their names.

**Classifications:**
- > 85%: "You are made to each other"
- 30-85%: "You are a middle couple, work hard!"
- ≤ 30%: "You might get divorced by the end of the year"

**Concept:** Functions, Math.random(), conditionals, user input, alert()

**Example:**
```javascript
loveCalculator(); // Prompts for two names and shows love percentage
```

---

### 6. Love Compatibility Calculator

**Function:** `loveCompatibility()`

Calculates love compatibility based on zodiac signs. Uses a predefined compatibility database for different zodiac sign combinations.

**Supported Zodiac Signs:**
Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces

**Concept:** Functions, objects, arrays, conditionals, string methods (toLowerCase, toUpperCase), fallback random values

**Example:**
```javascript
loveCompatibility(); // Prompts for two zodiac signs and shows compatibility percentage
```

---

### 7. Leap Year Identifier

**Function:** `isLeap(year)`

Determines if a given year is a leap year.

**Leap Year Rules:**
- Divisible by 400, OR
- Divisible by 4 but NOT by 100

**Concept:** Functions, conditionals, logical operators (||, &&), modulo operator

**Example:**
```javascript
isLeap(2028); // Returns "Leap year."
isLeap(2023); // Returns "Not leap year."
```

---

### 8. Guest List Checker

**Function:** Guest list validation using arrays

Checks if a user's name is in the guest list array using the `includes()` method.

**Guest List:**
["Angela", "Jack", "Pam", "James", "Lara", "Jason"]

**Concept:** Arrays, array methods (includes), conditionals, user input

**Example:**
```javascript
// Prompts for name
// Shows "Welcome!" if name is in list, otherwise "You are not in the list"
```

---

## Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)

### Running the Exercises

1. Open `index.html` in your web browser
2. Open the browser's developer console (F12 or Right-click → Inspect → Console)
3. The exercises will run automatically, and some will prompt for user input
4. Check the console for output from exercises that use `console.log()`

### Alternative: Using Node.js

If you have Node.js installed, you can also run the exercises by modifying the code to remove browser-specific functions (`prompt()`, `alert()`) and use Node.js equivalents.

---

## File Structure

```
JavaScript Project/
│
├── index.html      # HTML file (basic structure)
├── script.js       # All JavaScript exercises
├── style.css       # Stylesheet (if any styling is needed)
└── README.md       # This file
```

---

## Concepts Covered

This project demonstrates various JavaScript concepts:

- ✅ Functions and function declarations
- ✅ Variables (var)
- ✅ Arithmetic operations
- ✅ Conditional statements (if/else)
- ✅ Logical operators
- ✅ Math methods (Math.floor, Math.round, Math.random)
- ✅ Arrays and array methods (includes)
- ✅ Objects and object access
- ✅ String methods (toLowerCase, toUpperCase)
- ✅ User input (prompt)
- ✅ Output (console.log, alert)
- ✅ Return statements
- ✅ Modulo operator

---

## Notes

- Some exercises use browser-specific functions like `prompt()` and `alert()` which require a browser environment
- The exercises are designed for learning purposes and may include simplified logic
- Feel free to modify and experiment with the code to further your understanding!

---

## License

This project is for educational purposes.
