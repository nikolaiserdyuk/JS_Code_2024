"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

//

const num1 = Number(prompt("введите первое число"));
const num2 = Number(prompt("введите второе число"));
const num3 = Number(prompt("введите третье число"));

function findMaximal(number1, number2, number3) {
  //   let max = Math.max(num1, num2, num3);
  return alert(
    `Максимальное значение среди чисел ${number1}, ${number2}, ${number3} равно ${Math.max(
      number1,
      number2,
      number3
    )}`
  );
}

findMaximal(num1, num2, num3);
