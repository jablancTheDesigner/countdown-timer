const counter = setInterval(() => {
    countDownTimer()
}, 1000)

function countDownTimer() {
    const toDateStr = "07/26/2022";
    const toDate = new Date(toDateStr).getTime()
    const now = new Date().getTime();
    const diff = toDate - now

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    const secondsEl = document.querySelector('.js-seconds')
    const minutesEl = document.querySelector('.js-minutes')
    const hoursEl = document.querySelector('.js-hours')
    const daysEl = document.querySelector('.js-days')

    if (diff >= 0) {
        secondsEl.innerHTML = seconds
        minutesEl.innerHTML = minutes
        hoursEl.innerHTML = hours
        daysEl.innerHTML = days
    } else {
        clearInterval(counter)
    }

}

countDownTimer()

