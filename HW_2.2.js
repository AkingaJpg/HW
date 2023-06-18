const priceData = {
Apples: '23.4',
BANANAS: '48',
oRAngGEs: '48.7584'}

let categories = Object.fromEntries(Object.entries(priceData).map(([key,value]) => [key.toLowerCase(), Number(value).toFixed(2)]));

console.log(categories);
