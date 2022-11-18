function validateField(button){
    if(!(button.value.trim())){
        return capitalizeFirstLetter(button.id) + ' is required.' + '<br>';
    } else if (button.id == 'email'){
        var mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!(button.value.match(mailFormat))){
            return 'Invalid email.' + '<br>';
        }
        else {
            return '';
        }
    } else {
        return '';
    }
}

function  capitalizeFirstLetter(string) 
{ return string.charAt(0).toUpperCase() + string.slice(1); }