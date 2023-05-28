let buttonMinus = document.querySelector(".button-left");
let buttonPlus = document.querySelector(".button-right");
let workCapacity = document.querySelector("#work-capacity-value");

let pageRange = document.querySelector("#page-range");
let speedRange = document.querySelector("#speed-range");
let pageValue = document.querySelector("#page-value");
let speedValue = document.querySelector("#speed-value");
let confirmOrder = document.querySelector("#confirm-order");


let money_value = document.querySelector("#money-value");


confirmOrder.addEventListener("click", e => {
    money_value.textContent =  `Стоимость: ${Math.floor((Number(pageRange.value)/Number(speedRange.value)) * Number(workCapacity.value) * 10)} тыс. руб`
});


pageRange.addEventListener("change", e => {
    pageValue.textContent = `Количество страниц: ${e.target.value}`
});

speedRange.addEventListener("change", e => {
    speedValue.textContent = `Скорость выполнения: ${e.target.value} дней`
});

buttonMinus.addEventListener("click", e => {
    workCapacity.value--;
});

buttonPlus.addEventListener("click", e => {
    workCapacity.value++;
});