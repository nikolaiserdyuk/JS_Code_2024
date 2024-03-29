"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

//

let dayNumber = Number(prompt("Введите целое число от 1 до 31:"));
let monthDecade = 0;
if (1 <= dayNumber && dayNumber < 10) {
  monthDecade = 1;
  alert(`Число ${dayNumber} попадает в ${monthDecade} декаду месяца.`);
} else if (9 < dayNumber && dayNumber < 20) {
  monthDecade = 2;
  alert(`Число ${dayNumber} попадает в ${monthDecade} декаду месяца.`);
} else if (19 < dayNumber && dayNumber < 32) {
  monthDecade = 3;
  alert(`Число ${dayNumber} попадает в ${monthDecade} декаду месяца.`);
  // согласно интернету, если в месяце 31 день, то 31 число попадает также в третью декаду как и двадцатые числа месяца, хотя математически как-будто должна быть 4 декада
} else {
  alert("Неверное значение");
}
