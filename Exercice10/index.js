// // //votre code ici
function printNumbers(n) {
    let result = '';
    for (let index = 1; index <= n; index++) {
        result += index;
        if (index < n) {
            result += ' ';
        }
    }
    return result;
}

export default printNumbers;