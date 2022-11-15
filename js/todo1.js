// use functions to resolve the assignment
generateTask();

function generateTask() {
    let taskDisplayedField = document.getElementById('enter-task');
    let taskAddButton = document.getElementById('add-task');
    let errorMessage = document.getElementById('errMessage');

    taskAddButton.addEventListener('click', function (event) {
        event.preventDefault();
        if (!(taskDisplayedField.value.trim())) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';

            //move task to 'todo' form
            addTaskToDo(taskDisplayedField);
        }
    })
}

function addTaskToDo(taskname) {
    let toDoForm = document.getElementById('todo');
    //create li tag under ul tag
    let li = document.createElement('li');
    toDoForm.lastElementChild.appendChild(li);

    //create text field to display a new task
    let textField = document.createElement('input');
    textField.type = 'text';
    textField.value = taskname.value;
    textField.disabled = true;
    li.appendChild(textField);

    //create buttons (edit,done,delete) for a new task
    let edit = document.createElement('button');
    edit.innerText = 'Ändra';
    li.appendChild(edit);
    editTask(edit);

    let done = document.createElement('button');
    done.innerText = 'Färdig';
    li.appendChild(done);
    moveTaskToDone(done);

    let del = document.createElement('button');
    del.innerText = 'Radera';
    li.appendChild(del);
    deleteTask(del);

    //clear value on the taskname field after moving the value to 'Todo' section
    taskname.value = '';

    //create label error message in case change task to empty.
    let label = document.createElement('label');
    label.innerText = 'Får ej skapa tomma sysslor';
    label.style.display = 'none';
    label.style.fontSize = '1.1rem';
    label.style.color = 'red';
    li.appendChild(label);
}

function editTask(task) {
    task.addEventListener('click', function (event) {
        event.preventDefault();
        if (task.innerText == 'Ändra') {
            task.innerText = 'Spara';
            task.previousElementSibling.disabled = false;

            if (task.nextElementSibling.innerText == 'Färdig') {
                task.nextElementSibling.disabled = true;
            }
        } else if (task.innerText == 'Spara') {

            if (!(task.previousElementSibling.value.trim())) {
                task.parentNode.lastElementChild.style.display = 'block';
            } else {
                task.parentNode.lastElementChild.style.display = 'none';
                task.innerText = 'Ändra';
                task.previousElementSibling.disabled = true;
                if (task.nextElementSibling.innerText == 'Färdig') {
                    task.nextElementSibling.disabled = false;
                }
            }
        }
    })
}

function moveTaskToDone(task) {
    let done = document.getElementById('done');
    task.addEventListener('click', function (event) {
        event.preventDefault();
        //create li tag for new done task
        let li = document.createElement('li');
        done.lastElementChild.appendChild(li);

        //create text field for new done task
        let text = document.createElement('input');
        text.type = 'text';
        text.value = task.parentNode.firstElementChild.value;
        text.disabled = true;
        li.appendChild(text);

        //create edit and delete buttons for new done task
        let edit = document.createElement('button');
        edit.innerText = 'Ändra';
        li.appendChild(edit);
        editTask(edit);

        let del = document.createElement('button');
        del.innerText = 'Radera';
        li.appendChild(del);
        deleteTask(del);

        //create label error message in case change task to empty.
        let label = document.createElement('label');
        label.innerText = 'Får ej skapa tomma sysslor';
        label.style.display = 'none';
        label.style.fontSize = '1.1rem';
        label.style.color = 'red';
        li.appendChild(label);

        //delete task from todo list
        task.parentNode.remove();
    })
}

function deleteTask(task) {
    task.addEventListener('click', function (event) {
        event.preventDefault();
        task.parentNode.remove();
    })
}