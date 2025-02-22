console.log("JS working")

var productsInput = document.getElementById("products"); // input za produkte
var ordersInput = document.getElementById("orders"); // input za produkte
var packageInput = document.getElementById("package"); // input za paket
var accountingInput = document.getElementById("accounting"); // input za paket
var rentalInput = document.getElementById("rental"); // input za paket

var products = 0; // vrednost inputa za produkte
var orders = 0; // vrednost inputa za produkte
var package = 0; // vrednost inputa za produkte
var accounting = 0; // vrednost inputa za produkte
var rental = 0; // vrednost inputa za produkte

var totals = { // objekt celotne kalukacije
    products : 0, // vrednsot za produkte
    orders : 0,
    package : 0,
    accounting: 0,
    rental : 0
}
function getPackagePrice(package_name) {
    if(package_name === "Basic") {
        return 0;
    } else if(package_name === "Professional") {
        return 25;
    } else if(package_name === "Premium"){
        return 60;
    }
}
function setproductData(productsData, element, value, valueTotal) {
        var quantity = productsData.children[1]; // drugi stolpec
        var total = productsData.children[2];

        if(element !== 0 || element === true) {
            productsData.classList.remove("hidden");
        }
        if (typeof element !== "boolean")
            quantity.innerHTML = value

        total.innerHTML = valueTotal;
}
function calculateTotal() {

}
function showTotal() {
    var productsData = document.getElementsByClassName("products-data")[0];
    var ordersData = document.getElementsByClassName("orders-data")[0];
    var packageData = document.getElementsByClassName("package-data")[0];
    var accountingData = document.getElementsByClassName("accounting-data")[0];
    var rentalData = document.getElementsByClassName("rental-data")[0];

    if(totals.products > 0)
        setproductData(productsData, products, products + " * " + "$" + 0.5,"$" + totals.products);
    else
        productsData.classList.add("hidden")
    if(totals.orders > 0)
        setproductData(ordersData, orders, orders + " * " + "$" + 0.25, "$" + totals.orders);
    else
        ordersData.classList.add("hidden")
    if(totals.package !== "Choose package")
        setproductData(packageData, package, package, "$" + getPackagePrice(package));
    if(totals.accounting === 35)
        setproductData(accountingData, accounting, "$" + totals.accounting, "$" + totals.accounting);
    else
        accountingData.classList.add("hidden")
    if(totals.rental === 5)
        setproductData(rentalData, rental, "$" + totals.rental, "$" + totals.rental);
    else
        rentalData.classList.add("hidden")


}

function getValues() {
    products = parseInt(productsInput.value); // dobim vrednost za produkt
    totals.products = products * 0.5; // izracunam total za produkt

    orders = parseInt(ordersInput.value);
    totals.orders = orders * 0.25;

    package = packageInput.value;
    totals.package = package;

    rental = rentalInput.value;
    if(accountingInput.checked) {
        accounting = true;
        totals.accounting = 35;
    } else {
        accounting = false;
        totals.accounting = 0;
    }

    if(rentalInput.checked) {
        rental = true;
        totals.rental = 5;
    } else {
        rental = false;
        totals.rental = 0;
    }
    console.log(totals);
    showTotal();
}

productsInput.addEventListener("change", getValues);
ordersInput.addEventListener("change", getValues);
packageInput.addEventListener("change", getValues);
accountingInput.addEventListener("change", getValues);
rentalInput.addEventListener("change", getValues);


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