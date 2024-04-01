// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка заголовок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const catData = JSON.parse(catDataErrors);
console.log(catData);

const divElContent = document.querySelector(".content");
catData.forEach((element) => {
  divElContent.insertAdjacentHTML(
    "beforeend",
    `
  <div class="wrapper">
  <h2>${element.name}</h2>
  <img src="${element.image}" alt="catphoto"></a>
  <p>${element.description}</p>
  <a href="link:${element.link}">${element.link}</a>
  </div>
  `
  );
});
