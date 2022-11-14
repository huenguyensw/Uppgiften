//add task
let addButton = document.getElementById('add-task');
addButton.addEventListener('click', function (e) {
    e.preventDefault();

    let task = document.getElementById('enter-task');

    /*If task is empty, throw an error
    Else add task into list 'Att göra' */
    
    if (!(task.value)) {
        document.getElementById('errMessage').style.display = 'block';
    } else {
        document.getElementById('errMessage').style.display = "none";
        addTaskToDo(task);
    }
})

//edit task


function editTask(button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        if(event.target.innerText == 'Ändra'){
            event.target.innerText = 'Spara';
            event.target.previousElementSibling.disabled = false;  
            if(event.target.nextElementSibling.innerText == 'Färdig'){
                event.target.nextElementSibling.disabled = true;
            }
        } else if(event.target.innerText == 'Spara'){
            if(!(event.target.previousElementSibling.value)){
                event.target.parentNode.lastElementChild.style.display = 'block';
            } else {
                event.target.parentNode.lastElementChild.style.display = 'none';
                event.target.innerText = 'Ändra';
                event.target.previousElementSibling.disabled = true; 
                event.target.nextElementSibling.disabled = false;
            } 
        }
    })
}

function moveTask(button){
    button.addEventListener('click',function(event){
        event.preventDefault();
        if(event.target.innerText == 'Färdig'){
            let li = document.createElement('li');
            li.style.paddingBottom = "15px";

            let inputNode = document.createElement('input');
            inputNode.type = 'text';
            inputNode.value = button.parentNode.firstElementChild.value;
            inputNode.disabled = true;
            li.appendChild(inputNode);

            let editNode = document.createElement('button');
            editNode.innerText = 'Ändra';
            li.appendChild(editNode);
            editTask(editNode);

            let delNode = document.createElement('button');
            delNode.innerText = 'Radera';
            li.appendChild(delNode);
            delTask(delNode);

            document.getElementById('done').lastElementChild.appendChild(li);
            
            event.target.parentNode.remove();

             //create a label error message
             let errMessage = document.createElement('label');
             errMessage.innerText = "Får ej skapa tomma sysslor";
             errMessage.style.color = 'red';
             errMessage.style.fontSize = '1.1rem';
             errMessage.style.display = 'none';
             li.appendChild(errMessage); 

        }
    })
}

function delTask(button){
    button.addEventListener('click',function(event){
        event.preventDefault();
        if(event.target.innerText == 'Radera'){
            event.target.parentNode.remove();
        }
    })
}

function addTaskToDo(task) {
    let li = document.createElement('li');
    li.style.paddingBottom = "15px";

    let newElement = document.createElement('input');
    newElement.type = 'text';
    newElement.value = task.value;
    newElement.disabled = true;
    li.appendChild(newElement);

    //create edit, done, delete buttons
    let editButton = document.createElement('button');
    let doneButton = document.createElement('button');
    let delButton = document.createElement('button');

    editButton.innerHTML = 'Ändra';
    editButton.classList.add('Edit');
    editTask(editButton);
    

    doneButton.innerText = "Färdig";
    doneButton.classList.add('Done');
    moveTask(doneButton);

    delButton.innerText = 'Radera';
    delButton.classList.add('Delete');
    delTask(delButton);

    li.appendChild(editButton);
    li.appendChild(doneButton);
    li.appendChild(delButton);

    document.getElementById('todo').lastElementChild.appendChild(li);
    task.value = '';

    //create errMessage paragraph
    let errMessage = document.createElement('label');
    errMessage.innerText = "Får ej skapa tomma sysslor";
    errMessage.style.color = 'red';
    errMessage.style.fontSize = '1.1rem';
    errMessage.style.display = 'none';
    li.appendChild(errMessage);

}

function callReload(){
    //solution 1
    // location.reload();

    //solution 2
    document.getElementById('enter-task').innerHTML = "";
    document.getElementById('todo').innerHTML = "";
    document.getElementById('done').innerHTML = "";
    
}