function car (model, year, brand) {
    this.model = model;
    this.year = year;
    this.brand = brand;

    this.toString = function () {
        return `${this.model}-${this.year}-${this.brand}`;
    };
}

var myCar = new car("Corolla", 2020, "Toyota");
console.log(myCar.toString());

var newCar = new car("Tesla", 2020, "Model 3");
console.log(newCar.toString());