// TASK 1
// Напишіть програму, яка отримує від користувача 2 числа.
// Вивести різницю з допомогою функції alert.
// Підказка: для отримання чисел від користувача використовуйте функцію prompt

function getDifference() {
        let firstNumber = prompt("Enter the first namber: ");
        let secondNumber = prompt("Enter the second namber: ");

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

        let a = firstNumber - secondNumber; 
        let b = secondNumber - firstNumber;
        
            if (firstNumber > secondNumber) {
                alert("The difference is " + a);
            }   else if (firstNumber < secondNumber) {
                alert("The difference is " + b);
            }  else {
                alert("x = y ");
            }
}      
getDifference();

// TASK 2
// Напишіть програму, яка отримує від користувача 2 числа.
// Вивести максимальне з цих двох чисел.
// Підказка: для отримання чисел від користувача використовуйте функцію prompt

function getMax() {

  let firstNumber = prompt("Enter the first namber: ");
  let secondNumber = prompt("Enter the second namber: ");

  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

      if (x > y) {
          alert("The max is " + firstNumber);
      }   else if (firstNumber < secondNumber) {
          alert("The max is " + secondNumber);
      }  else {
          alert("x = y ");
      }
}
getMax();

// TASK 3
// Напишіть програму, яка отримує від користувача 2 рядки і повертає їх конкатенацію.
// Підказка: для отримання рядків від користувача використовуйте функцію prompt

function concatenateStrings() {

  let firstText = prompt("Enter the first string: ");
  let secondText = prompt("Enter the second string: ");

      let ollText = firstText + " " + secondText;

   alert(ollText);

}
concatenateStrings();

// TASK 4
// Напишіть функцію, яка отримує рядок і виводить його довжину.
// Підказка: для отримання рядка від користувача використовуйте функцію prompt

function showLength() {

  let text = prompt("Enter the text: ");

   alert(text.length);

}
showLength();

// TASK 5
// Напишіть функцію, яка конвертує введений рядок у верхній регістр.
// Підказка: для отримання рядка від користувача використовуйте функцію prompt

function toUpperCase() {
    
  let text = prompt("Enter the text: ");

      alert(text.toUpperCase());

}
toUpperCase();

// TASK 6
// Напишіть функцію, яка реверсує заданий рядок.
// Підказка: для отримання рядка від користувача використовуйте функцію prompt

function reverSestring() {
    
  let reverseText = prompt("Enter the text: ");

  let reverse = reverseText.split('').reverse().join('');

  alert(reverse);
    
}
reverSestring();

// TASK 7 *HARD*
// Напишіть програму, яка отримує від користувача 3-цифрове число і обертає його.
// Ви можете використовувати лише числа та їх оператори.
// Не використовуйте тут строки!

function reverseNumber() {
  let number = prompt("Enter a three-digit number(123): ");

    number = Number(number);

let revorse = 0;

while (number > 0) {
    
    let x = number % 10;
    revorse  = revorse * 10 + x;
    number = Math.floor(number / 10);
}

alert (revorse);
}

reverseNumber();

// TASK 8 *HARD*
// Напишіть функцію, яка отримує на вхід речення і повертає найдовше слово у цьому реченні.
// Якщо існує декілька слів однакової довжини, повернути перше з них.

function findLongestWord(someString){
    let reverse = someString.split(' ');
    let longest = '';
    let i = 0;

    while(i < reverse.length) {
        if (reverse[i].length > longest.length) {
            longest = reverse[i];
        }
        i++;

    }

    return longest;
}

console.log(findLongestWord('I am a coding god')); 
console.log(findLongestWord('I would like to work for Google')); 
console.log(findLongestWord('Ain`t nobody got time for that'));

// TASK 9 *HARD*
// Напишіть функцію, яка повертає перший неповторюваний символ у рядку.
// Якщо всі символи повторюються, повернути null.

function firstNonRepeatingCharacter(someString) {
  let letterCount = {};
  let i = 0;

  while (i < someString.length) {
      let letter = someString[i];

      if (letterCount[letter]) {
          letterCount[letter]++;
      } else {
          letterCount[letter] = 1;
      }
      i++;
  }

  i = 0;

  while (i < someString.length) {
      let letter = someString[i];

      if (letterCount[letter] === 1) {
          return letter; 
      }
      i++;
  }

  return null; 
}

console.log(firstNonRepeatingCharacter('hello'));
console.log(firstNonRepeatingCharacter('swiss'));
console.log(firstNonRepeatingCharacter('aabbcc'));
console.log(firstNonRepeatingCharacter('ccdd'));
