function solve(arr, firstPie, secondPie) {
    let firstIndex = arr.indexOf(firstPie);
    let secondIndex = arr.indexOf(secondPie);

    var result = arr.slice(firstIndex, secondIndex + 1);

    return result;
}

solve(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);