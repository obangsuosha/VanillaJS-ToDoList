function getTime() {
    const dayInfo = document.querySelector('.days');
    const timeInfo = document.querySelector('.times');
    const date = new Date();
    dayInfo.innerHTML =
        date.getFullYear() + '-' + date.getMonth() + 1 + '-' + date.getDate();
    timeInfo.innerHTML =
        `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}` +
        ':' +
        `${
            date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
        }` +
        ':' +
        `${
            date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
        }`;
}

function init() {
    console.log('Time Initialize..');
    getTime();
    setInterval(getTime, 1000);
}

init();
