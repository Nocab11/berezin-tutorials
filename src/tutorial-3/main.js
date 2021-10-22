let tasks = ['Я хочу сделать список задач', 'задача 2', 'купить пиво'];

const ul = document.querySelector('.ul-list');

const button = document.querySelector('.add-task');

const inputValue = document.querySelector('.input-task')

const render = (array) => {
    ul.innerHTML = "";
    array.forEach((item, index) => {
        let li = document.createElement('li');
        let close = document.createElement('button');

        li.innerText = item;
        close.innerText = 'X'
        close.onclick = () => handleClickRemove(index)

        li.appendChild(close);
        ul.appendChild(li)
    })
};

const handleClickRemove = index => {
    tasks = tasks.filter((_, i) => index !== i)
    render(tasks)
};

const handleClickAdd = () => {
    tasks.push(inputValue.value)
    inputValue.value = "";
    render(tasks)
};

button.onclick = handleClickAdd;

render(tasks);