const fashionShop = JSON.parse(fashionDataShop);

const content = document.querySelector(".wrapper");
fashionShop.forEach((element) => {
  content.insertAdjacentHTML(
    "beforeend",
    `
    <div class="wrapper">
    <img src="${element.image}" alt="photo"></a>
    <h3>${element.header}</h3>
    <p>${element.description}</p>
    <p>$${element.price}</p>
    </div>
  `
  );
});
