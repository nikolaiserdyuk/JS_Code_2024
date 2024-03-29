// "use strict";
// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

// const input1 = document.querySelector("input");
// const span1 = document.querySelector("span");
// input1.addEventListener("input", () => {
//   span1.textContent = input1.value;
// });

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

// const btn1 = document.querySelector(".messageBtn");
// const el = document.querySelector(".message");
// btn1.addEventListener("click", () => {
//   el.classList.add("animate_animated"); // через && почему-то не получилось,
//   el.classList.add("animate_fadeInLeftBig"); //  добавлялся только второй класс
//   el.style.visibility = "visible";
// });

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме.
// - Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля
// - (необходимо поставить класс error незаполненным полям).
// - Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const input = document.querySelectorAll(".form-control");
const option = document.querySelectorAll("option");
const btn2 = document.querySelectorAll("button");
const btn3 = btn2[1];
const form = document.querySelector("form");
let error = false;
btn3.addEventListener("click", (e) => {
  e.preventDefault();
  if (!option[0].checked && !input[0] === "") {
    form.submit();
  } else if (input[0].value === "" && error) {
    input[0].style.border = "3px solid red";
    error = true;
  } else if (!option[1].checked && !option[2].checked) {
    input[1].style.border = "3px solid red";
    error = true;
  }
});
// и все равно код не работает как надо. нужно доработать. :(
