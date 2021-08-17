function solve(n, m) {
    let numberN = Number(n);
    let numberM = Number(m);
    let result = 0;
    for (let i = numberN; i <= numberM; i++) {
        result += i;
    }
    console.log(result);
}

solve('-8', '20');