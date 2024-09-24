// Мінімум

// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

// while ((ageInput >= 0 && ageInput <= 99) === false) {
//   var ageInput = prompt('Enter your age: (1-2 digit numbers only)')
// }

// if (ageInput === null || ageInput === "") {
//   alert('Too bad! You will never know!')
// } else if (ageInput <= 11) {
//   alert('You can\'t read this code yet!')
// } else if (ageInput <= 17) {
//   alert('You are in the rebelious stage!')
// } else if (ageInput <= 59) {
//   alert('You have to pay the bills!')
// } else {
//   alert('You are finally free but not happy about it!')
// }

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

// let digit = prompt('Enter one digit from 0 to 9 to see special symbol: ')
// if (digit === 0) {
//   alert(")")
// } else if (digit === '1') {
//   alert('!')
// } else if (digit === '2') {
//   alert('@')
// } else if (digit === '3') {
//   alert('#')
// } else if (digit === '4') {
//   alert('$')
// } else if (digit === '5') {
//   alert('%')
// } else if (digit === '6') {
//   alert('^')
// } else if (digit === '7') {
//   alert('&')
// } else if (digit === '8') {
//   alert('*')
// } else if (digit === '9') {
//   alert('(')
// }

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

// let range = prompt('Enter two positive numbers less than 1000: \n(like 22 187)')

// let rangeArray = range.split(' ')
// let firstNumber = Number(rangeArray[0])
// let secondNumber = Number(rangeArray[1])

// let arr = []

// if (firstNumber === secondNumber) {
//   alert(firstNumber)
// } else if (firstNumber < secondNumber) {
//   for (let index = firstNumber; index <= secondNumber; index++) {
//     arr.push(index);
//   }
// } else {
//   for (let index = secondNumber; index <= firstNumber; index++) {
//     arr.push(index);
//   }
// }

// const currentSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)

// alert(currentSum)

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.


// let twoNumbers = prompt('Enter two positive integers : \n(like 27 150)')

// let twoNumbersArray = twoNumbers.split(' ')
// let firstInteger = Number(twoNumbersArray[0])
// let secondInteger = Number(twoNumbersArray[1])

// let probableDivisorsArray = []

// for (let i = 1; i <= firstInteger && i <= secondInteger; i++) {
//   probableDivisorsArray.push(i);
// }

// let actualDivisorsArray = []

// for (let i = 0; i < probableDivisorsArray.length; i++) {
//   if ((firstInteger % probableDivisorsArray[i]) === 0 && (secondInteger % probableDivisorsArray[i]) === 0) {
//     actualDivisorsArray.push(probableDivisorsArray[i])
//   }
// }

// let max = actualDivisorsArray[0]

// for (let i = 1; i < actualDivisorsArray.length; i++) {
//   if (actualDivisorsArray[i] > max) {
//     max = actualDivisorsArray[i];
//   }
// }
// alert(`The maximum common divisor of ${firstInteger} and ${secondInteger} is ${max}`)


// Запитай у користувача число і виведи всі дільники цього числа.

// let chosenNumber = Number(prompt('Enter a positive integer : '))

// const divArray = []

// for (let i = 1; i <= chosenNumber; i++) {
//   if (chosenNumber % i === 0) {
//     divArray.push(i)
//   }
// }
// alert(`The divisors of ${chosenNumber} are: ${divArray}`)



// Норма

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

// let aNumber = prompt('Enter a 5-digit number: ')
// let firstCondition
// let secondCondition

// if(aNumber[0] === aNumber[4]) {
//   firstCondition = true;
// } 

// if(aNumber[1] === aNumber[3]) {
//   secondCondition = true;
// } 

// if(firstCondition && secondCondition === true) {
//   alert(`${aNumber} is a palindrome`)
// } else {alert(`${aNumber} is not a palindrome`)}


// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

// let purchaseSum = Number(prompt('Enter your purchase sum: (like 56.75)'))

// let discount = purchaseSum / 100 * 3
// let oldPrice = (purchaseSum + discount).toFixed(2)

// let ddiscount = purchaseSum / 100 * 5
// let ooldPrice = (purchaseSum + ddiscount).toFixed(2)

// let dddiscount = purchaseSum / 100 * 7
// let oooldPrice = (purchaseSum + dddiscount).toFixed(2)

// if (200 <= purchaseSum <= 299) {
//   alert(`Your purchase sum without the discount is ${oldPrice}$`)
// } else if (300 <= purchaseSum <= 499) {
//   alert(`Your purchase sum without the discount is ${ooldPrice}$`)
// } else if (500 <= purchaseSum) {
//   alert(`Your purchase sum without the discount is ${oooldPrice}$`)
// } else { alert('You do not have a discount') }


// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.


















// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
// Максимум

// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.