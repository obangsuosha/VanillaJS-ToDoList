const input = document.querySelector('.addtask');
const inputbtn = document.querySelector('.addtask-btn');
const pl = document.querySelector('.pl');
const fl = document.querySelector('.fl');
const nump = document.querySelector('.task-num');
const numf = document.querySelector('.fin-num');

const PENDING = 'pending';
const FINISHED = 'finished';

let pendingList = [];
let finishedList = [];
let taskId = 0;

function deleteTag(from, where, event) {
    if (from === 0) {
        if (where == PENDING) {
            const btn = event.target;
            const box = btn.parentNode;
            const li = box.parentNode;

            pendingList = JSON.parse(localStorage.getItem(PENDING));

            pendingList = pendingList.filter(function (task) {
                return parseInt(task.id) !== parseInt(li.id);
            });
            if (pendingList.length > 0) {
                nump.innerText = ': ' + pendingList.length;
            } else {
                nump.innerText = '';
            }

            pl.removeChild(li);
            saveTodo(PENDING, pendingList);
        } else {
            const btn = event.target;
            const box = btn.parentNode;
            const li = box.parentNode;

            finishedList = JSON.parse(localStorage.getItem(FINISHED));

            finishedList = finishedList.filter(function (task) {
                return parseInt(task.id) !== parseInt(li.id);
            });

            if (finishedList.length > 0) {
                numf.innerText = ': ' + finishedList.length;
            } else {
                numf.innerText = '';
            }

            fl.removeChild(li);
            saveTodo(FINISHED, finishedList);
        }
    } else {
        if (where == PENDING) {
            const btn = event.target;
            const subbox = btn.parentNode;
            const box = subbox.parentNode;
            const li = box.parentNode;

            pendingList = JSON.parse(localStorage.getItem(PENDING));

            pendingList = pendingList.filter(function (task) {
                return parseInt(task.id) !== parseInt(li.id);
            });
            if (pendingList.length > 0) {
                nump.innerText = ': ' + pendingList.length;
            } else {
                nump.innerText = '';
            }
            pl.removeChild(li);
            saveTodo(PENDING, pendingList);
        } else {
            const btn = event.target;
            const subbox = btn.parentNode;
            const box = subbox.parentNode;
            const li = box.parentNode;

            finishedList = JSON.parse(localStorage.getItem(FINISHED));

            finishedList = finishedList.filter(function (task) {
                return parseInt(task.id) !== parseInt(li.id);
            });
            if (finishedList.length > 0) {
                numf.innerText = ': ' + finishedList.length;
            } else {
                numf.innerText = '';
            }
            fl.removeChild(li);
            saveTodo(FINISHED, finishedList);
        }
    }
}

function changeTag(where, event) {
    console.log(event);
    console.log(where);
    if (where == FINISHED) {
        const btn = event.target;
        const subbox = btn.parentNode;
        const box = subbox.parentNode;
        const li = box.parentNode;
        const task = li.querySelector('span').innerText;

        deleteTag(1, PENDING, event);
        addTask(FINISHED, task);
    } else {
        const btn = event.target;
        console.log(btn);
        const subbox = btn.parentNode;
        console.log(subbox);
        const box = subbox.parentNode;
        console.log(box);
        const li = box.parentNode;
        console.log(li);

        const task = li.querySelector('span').innerText;
        console.log(task);
        console.log(event);
        deleteTag(1, FINISHED, event);
        addTask(PENDING, task);
    }
}

function saveTodo(where, list) {
    if (where == PENDING) {
        console.log('100: ' + list);
        localStorage.setItem(PENDING, JSON.stringify(list));
    } else {
        console.log('200: ' + list);
        localStorage.setItem(FINISHED, JSON.stringify(list));
    }

    console.log(list);
}

function addTag(where, task) {
    if (task == null) return;
    if (where == PENDING) {
        const li = document.createElement('li');
        li.id = task.id;
        const span = document.createElement('span');
        span.innerText = task.do;
        const tasks = document.createElement('div');
        tasks.style.backgroundColor = 'rgba(255, 255, 255,0.7)';
        tasks.style.padding = '10px';
        tasks.style.display = 'flex';
        tasks.style.justifyContent = 'space-between';
        tasks.style.margin = '5px';
        const tleft = document.createElement('div');
        const btn = document.createElement('Button');
        btn.innerText = '🗑️';
        btn.style.width = '50px';
        btn.style.height = '50px';
        btn.style.border = '2px solid brown';
        btn.style.borderRadius = '25px';
        btn.style.backgroundColor = 'wheat';
        btn.addEventListener('click', (event) => deleteTag(0, PENDING, event));
        const btn2 = document.createElement('Button');
        btn2.style.width = '50px';
        btn2.style.height = '50px';
        btn2.style.border = '2px solid brown';
        btn2.style.borderRadius = '25px';
        btn2.style.backgroundColor = 'wheat';
        btn2.style.marginRight = '10px';
        btn2.innerText = '✔️';
        btn2.addEventListener('click', (event) => changeTag(FINISHED, event));

        tasks.style.animation = 'pop 0.3s ease-in-out';
        btn.style.animation = 'pup 0.3s ease-in-out';
        btn2.style.animation = 'pup 0.3s ease-in-out';

        pl.appendChild(li);
        li.appendChild(tasks);
        tasks.appendChild(tleft);
        tleft.appendChild(btn2);
        tleft.appendChild(span);
        tasks.appendChild(btn);
        if (pendingList.length > 0) {
            nump.innerText = ': ' + pendingList.length;
        } else {
            nump.innerText = '';
        }
    } else {
        const li = document.createElement('li');
        li.id = task.id;
        const span = document.createElement('span');
        span.innerText = task.do;
        const tasks = document.createElement('div');
        tasks.style.backgroundColor = 'rgba(255, 255, 255,0.7)';
        tasks.style.padding = '10px';
        tasks.style.display = 'flex';
        tasks.style.justifyContent = 'space-between';
        tasks.style.margin = '5px';
        tasks.style.animation = 'tada 1s ease-in-out';
        const tleft = document.createElement('div');
        const btn = document.createElement('Button');
        btn.innerText = '🗑️';
        btn.style.width = '50px';
        btn.style.height = '50px';
        btn.style.border = '2px solid brown';
        btn.style.borderRadius = '25px';
        btn.style.backgroundColor = 'wheat';

        btn.addEventListener('click', (event) => deleteTag(0, FINISHED, event));
        const btn2 = document.createElement('Button');
        btn2.style.width = '50px';
        btn2.style.height = '50px';
        btn2.style.border = '2px solid brown';
        btn2.style.borderRadius = '25px';
        btn2.style.backgroundColor = 'wheat';
        btn2.style.marginRight = '10px';
        btn2.innerText = '⭕';
        btn2.addEventListener('click', (event) => changeTag(PENDING, event));

        tasks.style.animation = 'pop 0.3s ease-in-out';
        btn.style.animation = 'pup 0.3s ease-in-out';
        btn2.style.animation = 'pup 0.3s ease-in-out';

        fl.appendChild(li);
        li.appendChild(tasks);
        tasks.appendChild(tleft);
        tleft.appendChild(btn2);
        tleft.appendChild(span);
        tasks.appendChild(btn);
        if (finishedList.length > 0) {
            numf.innerText = ': ' + finishedList.length;
        } else {
            numf.innerText = '';
        }
    }
}

function addTask(where, value) {
    const task = {
        id: taskId++,
        do: value,
    };
    if (where == PENDING) {
        pendingList.push(task);
        console.log(pendingList);
        localStorage.setItem(PENDING, JSON.stringify(pendingList));
        addTag(PENDING, task);
    } else {
        finishedList.push(task);
        console.log(finishedList);
        localStorage.setItem(FINISHED, JSON.stringify(finishedList));
        console.log('SET ' + localStorage.getItem(FINISHED));
        addTag(FINISHED, task);
    }
}

function changeHandler(e) {
    // console.log(e)
    addTask('pending', e.target.value);
    inputbtn.style.backgroundColor = 'transparent';
    e.target.value = '';
}

function inputHandler() {
    if (input.value !== '') {
        inputbtn.style.backgroundColor = 'brown';
    } else {
        inputbtn.style.backgroundColor = 'transparent';
    }
}

function loadTask() {
    console.log('Loading.....');
    const plist = JSON.parse(localStorage.getItem(PENDING));
    console.log(plist);
    if (plist !== null) {
        plist.forEach((item) => {
            addTag(PENDING, item);
        });
    }

    const flist = JSON.parse(localStorage.getItem(FINISHED));
    console.log(flist);
    if (flist !== null) {
        flist.forEach((item) => {
            addTag(FINISHED, item);
        });
    }
}

function init() {
    loadTask();
    input.addEventListener('input', inputHandler);
    input.addEventListener('change', changeHandler);
}

init();
