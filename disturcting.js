const user = {
    name: 'Mehedi Hasan', 
    age: 25,
    bike: 'Yeamah, Hounda'
}

const {name , bike} = user;
// console.log(name, bike);



function friends(a, b){
    return [a*3 , b*3];
}
const [first , secend] = friends(20, 15);
console.log(first , secend);