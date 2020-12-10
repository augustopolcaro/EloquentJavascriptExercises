// The sum of a range
// 1st assignment

const sum = (arreglo) => {
    let suma = 0;
    for (elem of arreglo) {
        suma += elem;
    }
    return suma;
}

const range = (arg1, arg2, step = 1) => {
    let retorno = [];

    for (i = arg1;
        arg1 < arg2 ? i <= arg2 : i >= arg2;
        i += step) {
        retorno.push(i)
    }
    return retorno;
}

console.log(range(1, 10, -1))