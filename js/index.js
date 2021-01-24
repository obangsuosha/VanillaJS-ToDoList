const welcomeScreen = document.querySelector('.welcome');
const inputname = document.querySelector('.username');
const userinfo = document.querySelector('.userinfo');
const bg = document.querySelector('.bgimg');
// function nameHandler() {
//     userinfo.innerHTML =
// }

function loadData() {
    const account = localStorage.getItem('account');
    if (account !== null) {
        userinfo.innerHTML = `Hi ${account}!!!`;
        welcomeScreen.style.display = 'none';
    }
}

function init() {
    loadData();

    if (inputname !== null) {
        inputname.addEventListener('change', (event) => {
            console.log(event.target.value);
            welcomeScreen.style.display = 'none';
            userinfo.innerHTML = 'Hi ' + event.target.value + '!!!';
            localStorage.setItem('account', event.target.value);
        });
    }

    const rNumber = Math.ceil(Math.random() * 5);
    console.log('NUMBER: ' + rNumber);
    bg.setAttribute('src', `./images/bg${rNumber}.jpg`);
}

init();
