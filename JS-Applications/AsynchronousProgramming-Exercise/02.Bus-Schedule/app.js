function solve() {
    let nextStop = '';
    let nextStopId = 'depot';
    let currentStop = 'depot';
    let infoElement = document.getElementById('info');

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
            .then(r => r.json())
            .then(d => {
                infoElement.textContent = `Next stop ${d.name}`;
                nextStop = d.next;
                currentStop = d.name;
                document.getElementById('depart').disabled = true;
                document.getElementById('arrive').disabled = false;
            })
            .catch(e => {
                infoElement.textContent = 'Error';
                document.getElementById('depart').disabled = true;
                document.getElementById('arrive').disabled = tue;
            })
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${currentStop}`;
        nextStopId = nextStop;
        document.getElementById('depart').disabled = false;
        document.getElementById('arrive').disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();