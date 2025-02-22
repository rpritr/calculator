console.log("JS working")

var productsInput = document.getElementById("products"); // input za produkte
var ordersInput = document.getElementById("orders"); // input za produkte

var products = 0; // vrednost inputa za produkte
var orders = 0; // vrednost inputa za produkte

var totals = { // objekt celotne kalukacije
    products : 0, // vrednsot za produkte
    orders : 0
}
function calcluteTotal() {
    console.log("Calculating total");
    totals.products = products * 0.5; // izracunam total za produkt
    totals.orders = orders * 0.25;
    console.log(totals);
}
function getValues() {
    products = productsInput.value; // dobim vrednost za produkt
    orders = ordersInput.value;
    console.log(products);
    console.log(orders);
    calcluteTotal();
}

productsInput.addEventListener("change", getValues);
ordersInput.addEventListener("change", getValues);



/*
function Calculator() {
    this.productsInput = document.getElementById("products");
    this.products = 0;
    //this.products.addEventListener("change", this.calculate());
}

Calculator.prototype.calculate = function () {
    console.log("Calculating total");
    console.log(this.products);
}

const totalCalculate = new Calculator();
console.log(totalCalculate);
totalCalculate.productsInput.addEventListener("change", totalCalculate.calculate);
 */