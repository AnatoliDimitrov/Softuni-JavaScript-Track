function getInfo() {
    let inputStopElement = document.getElementById('stopId');
    let busStopId = inputStopElement.value;
    let stopNameElement = document.getElementById('stopName');
    let busesUlElement = document.getElementById('buses');
    
    fetch(`http://localhost:3030/jsonstore/bus/businfo/${busStopId}`)
        .then(r => r.json())
        .then(d => {
            stopNameElement.textContent = d.name;
            Array.from(busesUlElement.children).forEach(l => l.remove())
            for (const key in d.buses) {
                busesUlElement.appendChild(creatLi(key, d.buses[key]));
            }
        })
        .catch(e => {
            Array.from(busesUlElement.children).forEach(l => l.remove())
            stopNameElement.textContent = 'Error';
        });
    
    inputStopElement.value = '';

    function creatLi(bus, minutes) {
        let li = document.createElement('li');
        li.textContent = `Bus ${bus} arrives in ${minutes} minutes`;
        return li;
    }
}