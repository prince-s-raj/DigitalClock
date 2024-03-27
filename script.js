const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const date = document.getElementById("dates")

setInterval(currentTime, 1000)

function currentTime(){
    const currentTime = new Date();
    hours.innerHTML = (currentTime.getHours() < 10) ? `0${currentTime.getHours()}` : `${currentTime.getHours()}`;
    minutes.innerHTML = (currentTime.getMinutes() < 10) ? `0${currentTime.getMinutes()}` : `${currentTime.getMinutes()}`;
    seconds.innerHTML = (currentTime.getSeconds() < 10) ? `0${currentTime.getSeconds()}` : `${currentTime.getSeconds()}`;
}

date.innerHTML = getCurrentDate();

function getCurrentDate(){
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = (date.getDate() < 10) ? `0${date.getDate()}` : `${date.getDate()}`;
    return `${day} ,   ${months[month]} &nbsp${year}`
}