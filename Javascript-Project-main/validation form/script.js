var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('massage-error');
var buttonError = document.getElementById('button-error');


// fullname function
function validatename() {
    var name = document.getElementById('conatact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// phone function
function validatePhone() {
    var phone = document.getElementById('conatact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digit';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits ';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// email function
function validateemail() {
    var email = document.getElementById('conatact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'email invaild';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// message function 
function validatemessage() {
    var message = document.getElementById('conatact-message').value;
    var required = 30;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// submit button 
function validateform() {
    if (!validatename() || validatephone() || validateemail() || validatemessage()) {
        buttonError.innerHTML = ' plase fill the form';
        buttonError.style.display = 'block';
        setInterval(function () { buttonError.style.display = 'none';}, 3000);
        return false;
    }
}