"use strict";

let images = [
    { id: "1", url: "./img/html-5.png" },
    { id: "2", url: "./img/css-3.png" },
    { id: "3", url: "./img/js.png" },
    { id: "4", url: "./img/sass.png" },
    { id: "5", url: "./img/bootstrap.png" },
];

const containerAdd = document.querySelector("#container-items");

const loadImages = (images, container) => {
    images.forEach((image) => {
        container.innerHTML += `
    <div class='item'>
    <img src='${image.url}'
    </div>`;
    });
};

loadImages(images, containerAdd);

let itens = document.querySelectorAll(".item");

const previous = () => {
    containerAdd.appendChild(itens[0]);
    itens = document.querySelectorAll(".item");
};

const next = () => {
    let lastItem = itens[itens.length - 1];
    containerAdd.insertBefore(lastItem, itens[0]);
    itens = document.querySelectorAll(".item");
};

document.querySelector("#previous").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);
