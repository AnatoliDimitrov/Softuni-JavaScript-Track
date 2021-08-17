function solve(inputArr) {

    var towns = {};

    inputArr
        .map(e => e.split(' <-> '))
        .map((x) => {
        !towns[x[0]] ? towns[x[0]] = Number(x[1]) : towns[x[0]] += Number(x[1]);
    });
    
    for (const town in towns) {
       console.log(`${town} : ${towns[town]}`);
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);