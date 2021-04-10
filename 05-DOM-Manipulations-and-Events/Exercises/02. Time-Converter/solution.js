function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');



    const main = Array.from(document.getElementsByTagName('main'))[0];
    main.addEventListener('click', (ev) => {
        if (ev.target.id === 'daysBtn') {
            const daysValue = Number(days.value);
            
            hours.value = daysValue * 24;
            minutes.value = daysValue * 1440;
            seconds. value = daysValue * 86400;
        } else if (ev.target.id === 'hoursBtn') {
            const hoursValue = Number(hours.value);

            days.value = hoursValue / 24;
            minutes.value = hoursValue * 60;
            seconds.value = hoursValue * 3600;
        } else if (ev.target.id === 'minutesBtn') {
            const minutesValue = Number(minutes.value);

            days.value = minutesValue / 1440;
            hours.value = minutesValue / 60;
            seconds.value = minutesValue * 60;
        } else if (ev.target.id === 'secondsBtn') {
            const secondsValue = Number(seconds.value);

            days.value = secondsValue / 86400;
            hours.value = secondsValue / 3600;
            minutes.value = secondsValue / 60;
        }
    })
}