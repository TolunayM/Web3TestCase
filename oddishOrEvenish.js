function oddishOrEvenish(number) {
    var sum = [], x = 0, y = 0;
    var number2 = number.toString();
    for (let i = 0; i < number2.length; i++) {
        sum.push(number2.charAt(i))
        x = sum.map(Number)
        y += x[i]
    }
    console.log(y)
    if (y % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}
oddishOrEvenish(112358);
