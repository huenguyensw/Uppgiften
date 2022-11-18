class userRegistrationForm {
    fields = [];
    getErrorMessage(){
        let text = '';
        for (let field of this.fields){
            let button = document.getElementById(field);
            text += validateField(button);
        }
        return text;
    }
}

let submit = document.getElementById('submit');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    const newUser = new userRegistrationForm();
    newUser.fields = ['email','password','address1','address2','city','zip'];
    let main = document.getElementById('main-container');
    main.children[2].style.display = 'block';
    const errorMessage = newUser.getErrorMessage();
    if (errorMessage){
        main.children[2].innerHTML = errorMessage;
        main.children[2].style.color = 'red';
    } else { 
        let policy = document.getElementById('policy');
        if(policy.checked){
        policy.previousElementSibling.style.display = 'none';
        main.children[2].innerHTML = 'Success! You are now registered.';
        main.children[2].style.backgroundColor = 'rgb(115 189 212)';
        main.children[2].style.color = 'black'
        main.children[2].style.padding = '15px 10px';
        main.children[2].style.borderRadius = '4px 4px';
        }
        else{
            console.log(policy.previousElementSibling);
            policy.previousElementSibling.style.display = 'block';
        }
        
    }

})

function generateYear(){
    let birthyear = document.getElementById('birthyear');
    let date = new Date();
    for (var i=date.getFullYear(); i>= 1920; i-- ){
        let option = document.createElement('option');
        option.innerText = i;
        birthyear.appendChild(option);
    }
}
generateYear();
