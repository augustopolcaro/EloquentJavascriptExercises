const reverseArray = (arreglo) => {
    let retorno = [];
    for (i = arreglo.length - 1; i >= 0; i--) {
        retorno.push(arreglo[i])
    }

    return retorno;
}

//console.log(reverseArray([1, 2, 3, 4, 5]))

const reverseArrayInPlace = (arreglo) => {
    let end = arreglo.length - 1;
    let start = 0;
    for(i = start; i <= Math.floor(end / 2); i++){
        aux = arreglo[start + i];
        arreglo[start + i] = arreglo[end - i]; 
        arreglo[end - i] = aux;
    }
    return arreglo;
}
let arreglo = [1,2,3,4,5]
reverseArray(arreglo);
console.log(arreglo);
reverseArrayInPlace(arreglo);
console.log(arreglo);