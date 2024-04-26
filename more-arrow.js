const getAge = (parson) => parson.age;
const student = {name: 'susmita sen', age: 26};
const age = getAge(student);
// console.log(age);

const getAge2 = parson => parson.name;
const student2 = {name: 'sukumar roy', age: 55};
const age2 = getAge2(student2);
console.log(age2);

const getNumber = number => number[3];
const numbers = [20, 25, 36, 69, 47, 58];
const result = getNumber(numbers);
console.log(result);