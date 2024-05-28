"use strict";

// 1
const result = 5 + 5 + "5";
console.log("Змінна:", result + "; її тип:", typeof(result));

// 2
const email = "i.skachkova.aa@gmail.com";
const temp = email.includes("@");
if(temp){
    console.log("Адреса містить знак @; кількість символів -", email.length);
}
else console.log("Адреса не містить знак @; кількість символів -", email.length);

// 3
const first = "my";
const second = "name";
const third = "is";
const fullName = first + " " + second + " " + third + " Ira";
console.log(fullName);

// 4
const userName = "Олександра";
const payment = 500;
alert("Дякуємо, " + userName + ". До сплати " + payment + " гривень");

