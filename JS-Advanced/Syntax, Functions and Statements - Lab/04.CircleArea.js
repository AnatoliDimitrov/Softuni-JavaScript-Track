function solve(radius){
    if (typeof(radius) === 'number') {
        let result = (Math.pow(radius, 2) * Math.PI);
    console.log(result.toFixed(2));
    } else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`);
    }
    
}

solve(5);
solve('5');