function solve(names) {

    names.sort((a, b) => a.localeCompare(b));
    names.forEach((e, i) => console.log(`${i + 1}.${e}`));
}

solve(["John", "Bob", "Christina", "Ema"]);