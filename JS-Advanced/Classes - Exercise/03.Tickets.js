function solve(ticketsInfo, criteria) {
    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = ticketsInfo.reduce((a, e) => {
        let [dest, price, stat] = e.split('|');
        a.push(new Ticket(dest, Number(price), stat));
        return a;
    }, []);
    if (criteria === 'price') {
        return result.sort((a, b) => a[criteria] - (b[criteria]));
    }
    return result.sort((a, b) => a[criteria].localeCompare(b[criteria]));
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'
));