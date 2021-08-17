function attachEvents() {
    let locationElement = document.getElementById('location');
    let submitElement = document.getElementById('submit');
    let forecastElement = document.getElementById('forecast');
    let currentWeatherElement = document.getElementById('current');
    let upcomingWeatherElement = document.getElementById('upcoming');

    let symbols = {
        Sunny: `☀`,
        'Partly sunny': `⛅`,
        Overcast: `☁`,
        Rain: `☂`,
    }
    submitElement.addEventListener('click', () => {
        removeChildren(currentWeatherElement.children);
        removeChildren(upcomingWeatherElement.children);

        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then(r => r.json())
            .then(d => {
                let currentLocation = d.find(l => l.name === locationElement.value);

                fetch(`http://localhost:3030/jsonstore/forecaster/today/${currentLocation.code}`)
                    .then(r => r.json())
                    .then(d => {
                        currentWeatherElement.appendChild(todayWeather(d));
                    })
                    .catch(e => {
                        console.log(e.message);
                })


                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${currentLocation.code}`)
                    .then(r => r.json())
                    .then(d => {
                        let wraper = document.createElement('div')
                        wraper.className = 'forecast-info';

                        for (const day in d.forecast) {
                            wraper.appendChild(threeDaysWeather(d.forecast[day]));
                        }

                        upcomingWeatherElement.appendChild(wraper);
                    })
                    .catch(e => {
                        console.log(e.message);
                })
            })
            .catch(e => {
                locationElement.value = `Error: Unknown location`;
                forecastElement.style.display = `none`;
                return;
        })

        forecastElement.style.display = `block`;
    });

    function removeChildren(children){
        Array.from(children).forEach((e, i) => {
            if (i != 0) {
                e.remove();
            }
        })
    }

    function todayWeather(weather) {
        let wraper = document.createElement('div')
        wraper.className = 'forecasts';

        let spanSymbol = document.createElement('span');
        spanSymbol.classList.add('condition', 'symbol');
        spanSymbol.textContent = symbols[weather.forecast['condition']];

        let spanCondition = document.createElement('span');

        let spanLocationName = document.createElement('span');
        spanLocationName.className = 'forecast-data';
        spanLocationName.textContent = weather.name;

        let spanDegrees = document.createElement('span');
        spanDegrees.className = 'forecast-data';
        spanDegrees.textContent = `${weather.forecast['low']}°/${weather.forecast['high']}°`;

        let condition = document.createElement('span');
        condition.className = `forecast-data`;
        condition.textContent = weather.forecast['condition'];

        spanCondition.appendChild(spanLocationName);
        spanCondition.appendChild(spanDegrees);
        spanCondition.appendChild(condition);

        wraper.appendChild(spanSymbol);
        wraper.appendChild(spanCondition);

        return wraper;
    }

    function threeDaysWeather(weather) {
        let wraper = document.createElement('div')
        wraper.className = 'forecast-info';

        let spanUpcoming = document.createElement('span');
        spanUpcoming.className = 'upcoming';

        let spanSymbol = document.createElement('span');
        spanSymbol.className = 'symbol';
        spanSymbol.textContent = symbols[weather.condition];

        let spanDegrees = document.createElement('span');
        spanDegrees.className = 'forecast-data';
        spanDegrees.textContent = `${weather.low}°/${weather.high}°`;

        let spanCondition = document.createElement('span');
        spanCondition.className = 'forecast-data';
        spanCondition.textContent = weather.condition;

        spanUpcoming.appendChild(spanSymbol);
        spanUpcoming.appendChild(spanDegrees);
        spanUpcoming.appendChild(spanCondition);

        return spanUpcoming;
    }
}

attachEvents();