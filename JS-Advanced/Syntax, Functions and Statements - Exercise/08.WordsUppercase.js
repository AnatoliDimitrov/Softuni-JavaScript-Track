function solve(text) {
    let matches = text.split(/\W+|\?/g);

    let result = [];

    for (let i = 0; i < matches.length; i++) {
        const element = matches[i];
        
        if (element.length > 0) {
            result.push(element.toUpperCase());
        }
    }

    console.log(result.join(', '));
}

solve('hello');