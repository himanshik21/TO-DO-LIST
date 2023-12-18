console.log('running properly');

// make an array to store the todo list items
let array = [
    {
        item: 'Buy Milk',
        dueDate: '17-11-2023'
    },

    {
        item: 'Go to College',
        dueDate: '17-11-2023'
    }
];
let dateArray = [];
display();

// function myTodo
function myTodo() {
    let text = document.querySelector(`#todo`);
    let date = document.querySelector(`#todo-date`);
    let inputVal = text.value;
    let dateVal = date.value;

    console.log(inputVal);
    console.log(dateVal);

    array.push({ item: inputVal, dueDate: dateVal });

    text.value = '';
    date.value = '';

    display();
}
function display() {
    let listItems = document.querySelector(`#todo-items`);

    let newHtml = ``;
    for (let i = 0; i < array.length; i++) {
        // let todoItemname = array[i].item;
        // let todoItemdate = array[i].dueDate;

        // 2nd method to write by destructuring is: 
        let { item, dueDate } = array[i];

        newHtml += `
       <span>${item}</span>
       <span>${dueDate}</span>
       <button class="delete" onclick="array.splice(${i},1); 
       display();">Delete</button>`
    }
    listItems.innerHTML = newHtml;
}