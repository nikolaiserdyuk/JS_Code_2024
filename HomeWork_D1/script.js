"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const id = document.getElementById("super_link");
console.log(id);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
let el1 = document.querySelectorAll(".card-link");
console.log(el1);
el1.forEach((element) => {
  element.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

let parent = document.querySelector(".card-body");
let el2 = parent.querySelectorAll(".card-link");
console.log(el2);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

let el3 = document.querySelector('[data-number="50"]');
console.log(el3);

// 5. Выведите содержимое тега title в консоль.

console.log(document.title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const el4 = document.querySelector(".card-title");
console.log(el4.parentNode);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const el5 = document.createElement("p");
el5.textContent = "Привет";
const card = document.querySelector(".card");
card.prepend(el5);

// 8. Удалите тег h6 на странице

const h = document.querySelector("h6");
h.remove();
