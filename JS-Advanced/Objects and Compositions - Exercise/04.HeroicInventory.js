function solve(heroesInput) {

    let register = [];

    for (const hero of heroesInput) {
        let arr = hero.split(' / ').filter(x => x);
        let currentHero = {
            name: arr[0],
            level: Number(arr[1]),
            items: arr[2] ? arr[2].split(', ').filter(x => x) : []
        };
        register.push(currentHero);
    }
 return JSON.stringify(register);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1']
));