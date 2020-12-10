// Ejercicio A LIST, eloquent javascript
const arrayToList = (arr) =>{
    let list = null;
    for( i = arr.length-1; i >= 0; i-- ){
        list = {
            value = arr[i],
            rest = list
        }
    }
    return list;
}   
//Esta fue mi primer solucion
const arrayToList2 = (arr, list = null) =>{
    if(list == null){
        list = {
            value: arr[arr.length-1],
            rest: null
        }
        arr.pop();
        return arrayToList(arr, list)
    }else if(arr.length > 0){
        let newList = {
            value:arr[arr.length-1],
            rest:list
        }
        arr.pop()
        return arrayToList(arr, newList)
    }else{
        return list;
    }          
}   

const listToArray = (list) => {
    let arr = [];
    for(;list != null;list = list.rest){
        arr.push(list.value);
    }
    return arr;
}

const prepend = (elem,list) =>{
    elem = {
        value:elem,
        rest: list
    }
    return list
}

const nth = (list, position) =>{
    if(position == 0){
        return list.value
    }else{
        list = list.rest;
        position--;
        return (nth(list,position))
    }
}

console.log(arrayToList([10, 20, 30, 40]));
// → {value: 10, rest: {value: 20, rest: null}}