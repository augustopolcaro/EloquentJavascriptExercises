function countBs(str){
    let count = 0;
    for(i = 0; i < str.length; i++){
        str[i] == 'B' ? count++ : null
    }
    return count;
}

console.log(countBs('asbBe'))