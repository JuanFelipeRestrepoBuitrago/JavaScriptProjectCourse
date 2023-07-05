function solution (car) {
    if (car.licensePlate == undefined || car.licensePlate == null) {
        car.drivingLicense = false;
    } else {
        car.drivingLicense = true;
    }

    return car;
}

// Test
function main() {
    tests = [
        {
            color: "Red",
            brand: "Kia"
        },
        {
            color: "Gray",
            brand: "Chevrolet",
            licensePlate: "AAA111"
        },
        {
            licensePlate: "RGB255"
        }
    ];

    for (let i = 0; i < tests.length; i++) {
        console.log(solution(tests[i]));
    }
}

main();