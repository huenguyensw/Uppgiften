let taskDisplayedField = document.getElementById('enter-task');
let taskAddButton = document.getElementById('add-task');
let errorMessage = document.getElementById('errMessage');

taskAddButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (!(taskDisplayedField.value.trim())) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        const newTask = new taskItem(taskDisplayedField);

       //clear content on the task field after moving it to todo list
        taskDisplayedField.value = '';
    }
})

class taskItem{
    constructor(taskName){
        let toDoForm = document.getElementById('todo');
        //create li tag under ul tag
        let li = document.createElement('li');
        toDoForm.lastElementChild.appendChild(li);

        //create text field to display a new task
        let textField = document.createElement('input');
        textField.type = 'text';
        textField.value = taskName.value;
        textField.disabled = true;
        li.appendChild(textField);


        //create buttons (edit,done,delete) for a new task
        let edit = document.createElement('button');
        edit.innerText = 'Ändra';
        li.appendChild(edit);
        this.edit(edit);

        let done = document.createElement('button');
        done.innerText = 'Färdig';
        li.appendChild(done);
        this.done(done);

        let del = document.createElement('button');
        del.innerText = 'Radera';
        li.appendChild(del);
        this.delete(del);

        //create label error message in case task is empty.
        let label = document.createElement('label');
        label.innerText = 'Får ej skapa tomma sysslor';
        label.style.display = 'none';
        label.style.fontSize = '1.1rem';
        label.style.color = 'red';
        li.appendChild(label);
    }
    edit(task){
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
    done(task){
        task.addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById('done').lastElementChild.appendChild(task.parentNode);
            //delete button Färdig
            task.remove();
        })
    }
    delete(task){
        task.addEventListener('click', function (event) {
            event.preventDefault();
            task.parentNode.remove();
        })
    }

}