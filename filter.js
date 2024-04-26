const numbers = [20, 10, 20, 50, 220, 30, 65, 70, 78, 75 ,98];
const selected = numbers.filter(num => num > 40);
console.log(selected);

const friends = ['mehedi', 'dewan', 'ridoy', 'jhankar', 'tom', 'mim', 'jeni'];
const selected2 = friends.filter(friend => friend.length > 2);
console.log(selected2);

const findNumbers = numbers.find(num => num > 40);
console.log(findNumbers);