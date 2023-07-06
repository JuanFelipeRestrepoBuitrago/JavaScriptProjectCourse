// This function must return the data type of the parameter
function solution(valor) {
    return typeof valor;
}

// test
function main(){
    var  data = [1, "Dieguillo", true, null, undefined, [1, 2, 3], {name: "Diego"}];

    for (var i = 0; i < data.length; i++) {
        console.log(solution(data[i]));
    }
}

main();
