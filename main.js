let fruits = ["Яблоко", "Банан", "Вишня", "Персик"];
alert("Начальная длина вашего Array: " + fruits.length);
console.log(fruits);


if (confirm("Хотите ли вы убрать слово 'персик' с вашего Array?")) {
    fruits.pop();
    alert("Теперь длина вашего Array: " + fruits.length);
    console.log(fruits);
} else {
    alert("ваш Array не изменен.");
}