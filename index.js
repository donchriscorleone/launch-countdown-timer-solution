const today = new Date();
const future = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14);
const cardDays = document.querySelector('.card-days');
const cardHours = document.querySelector('.card-hours');
const cardMinutes = document.querySelector('.card-minutes');
const cardSeconds = document.querySelector('.card-seconds');

const interval = setInterval(function() {
    const now = new Date();

    let difference = future.getTime() - now.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    applyAnimationClass(days, hours, minutes, seconds);
    cardDays.innerHTML = days;
    cardHours.innerHTML = hours;
    cardMinutes.innerHTML = minutes;
    cardSeconds.innerHTML = seconds;

    if (difference < 0) {
        clearInterval(interval)
        cardDays.innerHTML = 00;
        cardHours.innerHTML = 00;
        cardMinutes.innerHTML = 00;
        cardSeconds.innerHTML = 00;
    }
}, 1000)

const cardDaysContainer = document.querySelector('.card-days-container');
const cardHoursContainer = document.querySelector('.card-hours-container');
const cardMinutesContainer = document.querySelector('.card-minutes-container');
const cardSecondsContainer= document.querySelector('.card-seconds-container');

function applyAnimationClass(days, hours, minutes, seconds) {
    if (parseInt(cardDays.innerHTML) !== days) {
        cardDaysContainer.classList.add('page-animation');
        setTimeout(() => {
            cardDaysContainer.classList.remove('page-animation');
        }, 650)
    }

    if (parseInt(cardHours.innerHTML) !== hours) {
        cardHoursContainer.classList.add('page-animation');
        setTimeout(() => {
            cardHoursContainer.classList.remove('page-animation');
        }, 650)
    } 

    if (parseInt(cardMinutes.innerHTML) !== minutes) {
        cardMinutesContainer.classList.add('page-animation');
        setTimeout(() => {
            cardMinutesContainer.classList.remove('page-animation');
        }, 650)
    } 

    if (parseInt(cardSeconds.innerHTML) !== seconds) {
        cardSecondsContainer.classList.add('page-animation');
        setTimeout(() => {
            cardSecondsContainer.classList.remove('page-animation');
        }, 650)
    } 
}