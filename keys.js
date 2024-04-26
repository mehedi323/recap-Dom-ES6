const computer = {
    monito: 'wolton-cined-V22',
    price: 9500,
    color: 'black',
    isClend: true
};

const keys = Object.keys(computer);
// console.log(keys);

const values = Object.values(computer)
// console.log(values);

const entries = Object.entries(computer);
// console.log(entries);

const freeze = Object.freeze(computer)
delete computer.isClend;
// console.log(freeze);

const seal = Object.seal(computer);
// console.log(seal);



function getNumbers(...number) {
    sum = 0;
    for (const i of number) {
        sum = sum + i;
    }
    console.log(sum);
}
getNumbers(1, 5, 6, 2, 3, 4, 8, 5);