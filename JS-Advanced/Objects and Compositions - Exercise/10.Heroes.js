function solve() {

    const mage = (heroName) => {
        let state = {
            'name': heroName,
            'health': 100,
            'mana': 100
        }

        return Object.assign(state, canCast(state))
    }

    const fighter = (heroName) => {
        let state = {
            'name': heroName,
            'health': 100,
            'stamina': 100
        }

        return Object.assign(state, canFight(state))
    }

    const canCast = (state) => ({
        cast: (cast) => {
            state.mana--;
            console.log(`${state.name} cast ${cast}`);
        }
    })

    const canFight = (state) => ({
        fight: () => {
            state.stamina--;
            console.log(`${state.name} slashes at the foe!`);
        }
    })

    return {mage: mage, fighter: fighter}
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
