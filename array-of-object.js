const products = [
    {id: 1, name: 'wolton', price: 32550, compani: 'wolton'},
    {id: 2, name: 'lenavo', price: 52550, compani: 'lenovo'},
    {id: 3, name: 'Hp', price: 54550, compani: 'HP'},
    {id: 4, name: 'maxbook', price: 132550, compani: 'Mac'}
]
// map--------------
// const productName = products.map(pro => pro.name);
// const productNames = products.map(pro => pro.price)
// console.log(productName);
// console.log(productNames);

// forEach----------
// const productIdName = products.forEach(p => console.log(p.id))
// console.log(productIdName);

// filter----------------
// const productExpensive = products.filter(p => p.price > 130000);
// console.log(productExpensive);

// find-------------
// const productFind = products.find(p => p.price > 120000);
// console.log(productFind);

// reduce-----------------
const productReduce = products.reduce( (p , c)=> p + c.price ,0);
console.log(productReduce);