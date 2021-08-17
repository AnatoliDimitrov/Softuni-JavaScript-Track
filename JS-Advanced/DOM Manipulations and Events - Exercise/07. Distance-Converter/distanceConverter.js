function attachEventsListeners() {

    document.getElementById('convert').addEventListener('click', function () {
        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;
        let inputDistance = Number(document.getElementById('inputDistance').value);
        let result = convert(inputUnits, outputUnits, inputDistance);
        document.getElementById('outputDistance').value = result;
    });

    function convert(from, to, distance) {
        function convertToMeters(from) {
            let resultMeters = {
                'km': distance * 1000,
                'm': distance,
                'cm': distance * 0.01,
                'mm': distance * 0.001,
                'mi': distance * 1609.34,
                'yrd': distance * 0.9144,
                'ft': distance * 0.3048,
                'in': distance * 0.0254,
            };
            return resultMeters[from];
        }
        function convertFromMeters(to, meters) {
            let result = {
                'km': meters / 1000,
                'm': meters,
                'cm': meters / 0.01,
                'mm': meters / 0.001,
                'mi': meters / 1609.34,
                'yrd': meters / 0.9144,
                'ft': meters / 0.3048,
                'in': meters / 0.0254,
            };
            return result[to];
        }
        return convertFromMeters(to, convertToMeters(from));
    }
}