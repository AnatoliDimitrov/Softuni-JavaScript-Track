function attachEventsListeners() {

    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    daysElement
        .parentNode
        .querySelector('#daysBtn')
        .addEventListener('click', function () {
            let days = Number(daysElement.value);
            let hours = days * 24;
            let minutes = days * 1440;
            let seconds = days * 86400;

            display(seconds, minutes, hours, days);
    })
    hoursElement
        .parentNode
        .querySelector('#hoursBtn')
        .addEventListener('click', function () {
            let hours = Number(hoursElement.value);
            let minutes = hours * 60;
            let seconds = hours * 3600;
            let days = hours / 24;

            display(seconds, minutes, hours, days);
    })
    minutesElement
        .parentNode
        .querySelector('#minutesBtn')
        .addEventListener('click', function () {
            let minutes = Number(minutesElement.value);
            let seconds = minutes * 60;
            let days = minutes / 1440;
            let hours = minutes / 60;

            display(seconds, minutes, hours, days);
    })
    secondsElement
        .parentNode
        .querySelector('#secondsBtn')
        .addEventListener('click', function () {
        let seconds = Number(secondsElement.value);
        let days = seconds / 86400;
        let hours    = seconds / 3600;
        let minutes = seconds / 60;
        
        display(seconds, minutes, hours, days);
    })

    function display(seconds, minutes, hours, days) {
        daysElement.value = days;
        hoursElement.value = hours;
        minutesElement.value = minutes;
        secondsElement.value = seconds;
    }
}