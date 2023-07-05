var miAuto = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    carDetails: function() {
        console.log(`Car ${this.model}-${this.year}`);
    }
};

console.log(miAuto);
miAuto.carDetails();