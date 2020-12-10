//Exercise DeepComparision - Eloquent Javascript

let obj = {here: {is: "an"}, object: 2};


const deepEqual = (object1,object2) =>{
    object = {...object1}
    key = Object.keys(object1)[0];
    while(Object.entries(object).length !== 0){
        if(typeof object[key] === 'object'){
            return deepEqual(object[key],object2[key]);
        }
        if(object[key] === object2[key]){
            delete object[key]
            return deepEqual(object,object2)
        }else{
            return false;
        }
    }
    return true;    
}

console.log(deepEqual(obj, obj));
// // → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true