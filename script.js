document.addEventListener('DOMContentLoaded', (event) => {

    let xmas = '25 Dec 2023';

    let days_element = document.getElementById('days');
    let hours_element = document.getElementById('hours');
    let minutes_element = document.getElementById('minutes');
    let seconds_element = document.getElementById('seconds');


     function count_down() {

       let xmas_date = new Date(xmas);
       let current_date = new Date();

       let total_seconds = (xmas_date - current_date) / 1000;
       let days = Math.floor(total_seconds / 3600 / 24);
       let hours = Math.floor(total_seconds / 3600) % 24;
       let minutes = Math.floor(total_seconds / 60) % 60;
       let seconds = Math.floor(total_seconds) % 60;


        days_element.innerHTML = days;
        hours_element.innerHTML = format_time(hours);
        minutes_element.innerHTML = format_time(minutes);
        seconds_element.innerHTML = format_time(seconds);

    }

    function format_time(time) {
        return time < 10 ? `0${time}` : time;
    }

    count_down();

    setInterval(count_down, 1000);



});