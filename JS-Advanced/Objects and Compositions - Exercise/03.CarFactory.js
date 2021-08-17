function solve(car){

    let engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }];
    
    let result = {};
    result.model = car.model;

    if (car.power <= 90) {
        result.engine = engines[0];
    } else if(car.power <= 120){
        result.engine = engines[1];
    } else {
        result.engine = engines[2];
    }

    result.carriage = {type: car.carriage, color: car.color};

    if (car.wheelsize % 2 == 0) {
        car.wheelsize--;
    }

    result.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];

    return result;
}

console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));