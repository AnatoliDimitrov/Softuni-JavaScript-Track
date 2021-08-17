function solve(arr) {
    arr.sort(cmp);
    arr.forEach(x => console.log(x));

    

function cmp(a, b) {
    if (a.length > b.length) return +1;
    if (a.length < b.length) return -1;
    return a.localeCompare(b);
}
}

solve(['test', 
'Deny', 
'omen', 
'Default']
);