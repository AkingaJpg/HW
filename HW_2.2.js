const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584'
};

function optimizer(productsprice) {
    let result = Object.fromEntries(Object.entries(productsprice).map(([key, value]) => [key.toLowerCase(), Number(value).toFixed(2)]));
    return result;
}
console.log(optimizer(priceData));

