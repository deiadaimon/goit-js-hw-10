import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button');
const countDays = document.querySelector('[data-days]');
const countHours = document.querySelector('[data-hours]');
const countMinutes = document.querySelector('[data-minutes]');
const countSeconds = document.querySelector('[data-seconds]');

button.disabled = true;
button.addEventListener('click', onTimerStart);

let userSelectedDate;
let countdown;

const options = {
    // enableTime - enables time picker
    enableTime: true,
    // time_24hr - displays time picker in 24 hour mode without AM/PM selection when enabled
    time_24hr: true,
    // defaultDate - sets the initial selected date(s);
    // new Date() - sets current date
    defaultDate: new Date(),
    // minuteIncrement - adjusts the step for the minute input(incl.scrolling)
    minuteIncrement: 1,
    // onClose - function(s) to trigger on every time the calendar is closed
    onClose(selectedDates) {
        if (selectedDates[0] <= Date.now()) {
            button.disabled = true;
            iziToast.error({
                title: 'Error!',
                message: 'Please choose a date in the future',
                position: 'topRight',
            });
        } else {
            button.disabled = false;
            userSelectedDate = selectedDates[0];
        }
    },
};

flatpickr(input, options);

function onTimerStart() {
    countdown = setInterval(() => {
        const ms = userSelectedDate - new Date();
        convertMs(ms);
        updateTimer(ms);
    }, 1000);
    button.disabled = true;
    input.disabled = true;
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function updateTimer(ms) {
    const { days, hours, minutes, seconds } = convertMs(ms);

    if (!days && !hours && !minutes && !seconds) {
        clearInterval(countdown);
        input.disabled = false;
    }

    countDays.textContent = addLeadingZero(days);
    countHours.textContent = addLeadingZero(hours);
    countMinutes.textContent = addLeadingZero(minutes);
    countSeconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}