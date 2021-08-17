function solve(first, second, third){
let len = first.length + second.length + third.length;
let average = Math.trunc(len / 3);
console.log(len);
console.log(average);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');