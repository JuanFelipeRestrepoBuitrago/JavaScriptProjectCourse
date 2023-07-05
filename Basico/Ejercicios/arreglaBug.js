function solution(cars) {
    // 👇 Este es el código que no funciona
    return cars.filter(function (car) {
      if (car.licensePlate != undefined || car.licensePlate != null) {
        return true;
      } else {
        return false;
      }
    });
}

// Test
function main() {
    tests = [
        {
         "color": "red",
         "brand": "Kia"
        },
        {
         "color": "gray",
         "brand": "Chevrolet",
         "licensePlate": "AAA111"
        },
        {
         "licensePlate": "RGB255"
        }
    ];

    console.log(solution(tests));
}

main();
