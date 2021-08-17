function solve(speed, area) {
    speed = Number(speed);

    let limit = 0;

    switch (area) {
            case 'motorway':
                limit = 130;
            break;
            case 'interstate':
                limit = 90;
            break;
            case 'city':
                limit = 50;
            break;
            case 'residential':
                limit = 20;
                break;
    }

    let result = '';

    if (speed <= limit) {
        result = `Driving ${speed} km/h in a ${limit} zone`;
    } else {
        if (speed <= limit + 20) {
            result = `The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - speeding`;
        } else if (speed <= limit + 40) {
            result = `The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - excessive speeding`;
        } else {
            result = `The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - reckless driving`;
        }
    }

    console.log(result);
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');