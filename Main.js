const n = parseInt(readline()); // the number of temperatures to analyse
const inputs = readline().split(' ').map(x => +x);

let min = Infinity;

for (let i in inputs) {
    (Math.abs(inputs[i]) < Math.abs(min) || inputs[i] === -min && inputs[i] > 0) && (min = inputs[i]);
};

console.log(min || 0); 
