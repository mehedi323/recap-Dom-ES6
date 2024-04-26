const array1 = [1, 2, 3];
const array2 = [...array1];
// console.log(array2);

const numbers = [20, 25, 36, 14, 45, 65, 2,  85, 91, 97];
const nums = Math.min(...numbers);
// console.log(nums);

const number = [5, 20, 6];
const sum = (a, b, c) => a + b + c;
const result = sum(...numbers);  
console.log(result);


 ;



 let poorCountry = ['bangladesh', 'srilonka'];
 let richCountry = [...poorCountry ,'canada', 'amireca'];
//  let richcountry = [...poorCountry]
console.log(richCountry);

const computer = {
    name: 'wolton mini PC',
    price: 24550,
    color: 'oreang',
    isClend: true 
};
const computer2 = {
    ...computer,
    name: 'Sumsang mini PC',
    price: 20550,
    color: 'Red',
    isClend: false 
};
// console.log(computer2);
const richThana = ['jibannager', 'chuadanga']
const richCity = [  'Dhaka', 'Coxs-Bazar'];
const richDiveion =[...richCity, 'Khulna', 'Barisal'];
richDiveion.push(richThana)
// richDiveion.push(richCity)
console.log(richDiveion); 