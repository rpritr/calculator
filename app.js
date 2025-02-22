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
function setproductData(totalElement, productsData, element, price) {
   // if(totalElement > 0) {
        var quantity = productsData.children[1]; // drugi stolpec
        console.log("Q " + quantity.innerHTML);
        console.log(element);
        // TODO !!! urediti prikaz za skrivanje
        if(element !== 0 || element === true) {
            productsData.classList.remove("hidden");
        }
        var total = productsData.children[2];
        console.log(quantity);
        if(typeof element === "string") {
            quantity.innerHTML = element;
            // CENA PAKETA?
            total.innerHTML = "$" + getPackagePrice(element) ;

        } else if (typeof element === "boolean") {
            //quantity.innerHTML = element;
            total.innerHTML = "$" + totalElement ;
        }
        else {
            quantity.innerHTML = element + " * " + "$" + price;
            total.innerHTML = "$" + totalElement ;
        }
        // if string?

  //  }
}
function showTotal() {
    console.log("Showing total");
    var itemsElement = document.getElementsByClassName("items")[0];
    var productsData = document.getElementsByClassName("products-data")[0];
    var ordersData = document.getElementsByClassName("orders-data")[0];
    var packageData = document.getElementsByClassName("package-data")[0];
    var accountingData = document.getElementsByClassName("accounting-data")[0];
    var rentalData = document.getElementsByClassName("rental-data")[0];

    console.log(itemsElement);
    if(totals.products > 0)
        setproductData(totals.products, productsData, products, 0.5);
    else
        productsData.classList.add("hidden")
    if(totals.orders > 0)
        setproductData(totals.orders, ordersData, orders, 0.25);
    else
        ordersData.classList.add("hidden")
    if(totals.package !== "Choose package")
        setproductData(totals.package, packageData, package);
    if(totals.accounting === 35)
        setproductData(totals.accounting, accountingData, accounting);
    else
        accountingData.classList.add("hidden")
    if(totals.rental === 5)
        setproductData(totals.rental, rentalData, rental);
    else
        rentalData.classList.add("hidden")
    console.log(productsData);

}
function calcluteTotal() {
    console.log("Calculating total");
    totals.products = products * 0.5; // izracunam total za produkt
    totals.orders = orders * 0.25;
    totals.package = package;
    if(accounting === true) {
        totals.accounting = 35;
    } else {
        totals.accounting = 0;
    }
    if(rental === true) {
        totals.rental = 5;
    } else {
        totals.rental = 0;
    }
    console.log(totals);
    showTotal();
}
function getValues() {
    products = parseInt(productsInput.value); // dobim vrednost za produkt
    orders = parseInt(ordersInput.value);
    package = packageInput.value;
    rental = rentalInput.value;
    console.log(rentalInput);
    if(accountingInput.checked) {
        accounting = true;
    } else {
        accounting = false;
    }
    if(rentalInput.checked) {
        rental = true;
    } else {
        rental = false;
    }
    calcluteTotal();
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