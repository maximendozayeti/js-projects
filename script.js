//Exercise done in Javascript for the age calculation://

function lifeInWeeks(age) {

/************Don't change the code above************/    
    
var yearsLeft = 90 - age;
  var days = yearsLeft * 365;
  var weeks = yearsLeft * 52;
  var months = yearsLeft * 12;

console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
        
/*************Don't change the code below**********/
}


//Exercise on the bottles of milk along with functions, variables, consolo.logs and returns://

function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log("buy " + calcBottles(money, 1.5) + " bottles of milk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money, 1.5);
}

function calcBottles(startingMoney, costPerBottle) {
    
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}
    
console.log("Hello sir, here is your $" + getMilk(7) + " change.");

//JS BMI calculator Test passed!!//

function bmiCalculator(weight, height) {
    var bmiFormula = weight / (height * height);
    return Math.round(bmiFormula);
}
var bmi = bmiCalculator(65, 1.8); 

//JS BMI Calculator updated with if/else statements://

var userWeightInput = prompt("What is your weight?");
var userHeightInput = prompt("What is your height?");

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}

console.log(bmiCalculator(userWeightInput, userHeightInput));


//Love Calculator from the exercise, passed!//

function loveCalculator() {
    var he = prompt("What is your name?");
    var she = prompt("What is her name");
    var percentage = Math.floor(Math.random() * 100) + 1;

    if (percentage > 85) {
        alert(he + " ❤️ " + she + " = " + percentage + "% of love. You are made to each other");
    }
    if  (percentage > 30 && percentage <= 85) {
        alert(he + " ❤️ " + she + " = " + percentage + "% of love. You are a middle couple, work hard!");
    }
    if (percentage <= 30)
        alert(he + " ❤️ " + she + " = " + percentage + "% of love. You might get divorced by the end of the year");
    }

loveCalculator();


//Love JS calculator compatibility based on zodiacal signs://

function loveCompatibility() {
var sign1 = prompt("What's your zodiac sign? (e.g. Aries)").toLowerCase();
var sign2 = prompt("What's their zodiac sign? (e.g. Leo)").toLowerCase();

  //compatibility database
var compatibility = {
    aries: {leo: 90, sagittarius: 85, libra: 75, aries: 80},
    taurus: {virgo: 90, capricorn: 85, scorpio: 70, taurus: 80},
    gemini: {libra: 90, aquarius: 85, sagittarius: 70, gemini: 80},
    cancer: {scorpio: 90, pisces: 85, capricorn: 70, cancer: 80},
    leo: {aries: 90, sagittarius: 85, aquarius: 70, leo: 80},
    virgo: {taurus: 90, capricorn: 85, pisces: 70, virgo: 80},
    libra: {gemini: 90, aquarius: 85, aries: 70, libra: 80},
    scorpio: {cancer: 90, pisces: 85, taurus: 70, scorpio: 80},
    sagittarius: {aries: 90, leo: 85, gemini: 70, sagittarius: 80},
    capricorn: {taurus: 90, virgo: 85, cancer: 70, capricorn: 80},
    aquarius: {gemini: 90, libra: 85, leo: 70, aquarius: 80},
    pisces: {cancer: 90, scorpio: 85, virgo: 70, pisces: 80}
};

  // Grab compatibility score or generate a random fallback
var score =
    (compatibility[sign1] && compatibility[sign1][sign2])
    ? compatibility[sign1][sign2]
      : Math.floor(Math.random() * 100) + 1; 

alert(
    "Love Compatibility between " +
    sign1.toUpperCase() +
    " ❤️ " +
    sign2.toUpperCase() +
    " is: " +
    score + "%"
);
}

loveCompatibility();

//Leap Year Identifier Challenge//

function isLeap(year) {
    var input = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);

    if (input) {
        return "Leap year.";
    } else {
        return "Not leap year.";
    }
    
}

console.log(isLeap(2028));

//Checking Includes statement inside an array exercise//

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your Name?");
    if (guestList.includes(guestName)) {
        alert("Welcome!");
    }
    else {
        alert("You are not in the list");
    }

//FizzBuzz exercise in JavaScript made by the teacher//

var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
    console.log(output);

}

//Refactored FizzBuzz code with some improvements//

function fizzBuzz(n = 100) { 
    for (var i = 1; i <= n; i++) { 
        var out = ''; 
        if (i % 3 === 0) out += 'Fizz'; 
        if (i % 5 === 0) out += 'Buzz'; 
        console.log(out || i); 
    } 
} 

fizzBuzz();

//Paying Lunch game in JS //

function whosPaying(names) {
    
/******Don't change the code above*******/   
    //Write your code here.
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
var random = Math.floor(Math.random() * names.length);
var randomName = names[random];
return (randomName + " is going to buy lunch today!");
/******Don't change the code below*******/    
}