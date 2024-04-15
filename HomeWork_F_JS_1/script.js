// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задания должно состоять из одной строки

// const arr = [1, 5, 7, 9];
// const minimal = Math.min(...arr);
// console.log(minimal);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

// function createCounter(initialCount) {
//   let counter = initialCount;
//   return {
//     increment: function (num) {
//       counter += num;
//     },
//     decrement: function (num) {
//       counter -= num;
//     },
//     getCounter: function () {
//       return counter;
//     },
//   };
// }
// const letsCount = createCounter(7);
// letsCount.increment(1);
// letsCount.decrement(1);
// console.log(letsCount.getCounter());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

//

const findElementByClass = document.getElementsByClassName(..."class");
