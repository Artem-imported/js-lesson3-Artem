const result = 5 + 5 + '5';
console.log("Result:", result);
console.log("Result type:", typeof result);

const email = "artemgorelii1234@gmail.com";
console.log("Email містить '@':", email.includes('@'), "Кількість символів в email:", email.length);

const word1 = "My";
const word2 = "name";
const word3 = "is";
const fullName = `${word1} ${word2} ${word3} Viktor`;
console.log("fullName:", fullName);

const userName = "Artem";
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);