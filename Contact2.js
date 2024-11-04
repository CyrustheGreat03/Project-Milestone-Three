// The client-side Form Validation video on D2L helped me write this code// 


//This is to reference each element from contact.html// 
const form = document.getElementById('form');
const FLname = document.getElementById('FLname');
const email = document.getElementById('email');

// This is to stop the form from submitting without validation //
form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
        e.preventDefault(); 
    }
});

//This is used to generate the error message when textbox is empty
const setError = (element, message) => {
    const inputss = element.parentElement;
    const errorDisplay = inputss.querySelector('.error');
    errorDisplay.innerText = message;
    inputss.classList.add('error');
};

const setSuccess = (element) => {
    const inputss = element.parentElement;
    const errorDisplay = inputss.querySelector('.error');
    errorDisplay.innerText = '';
    inputss.classList.remove('error');
};

//This is to get gather the values of each input //
const validateInputs = () => {
    let isValid = true;
    const FLnameValue = FLname.value.trim();
    const emailValue = email.value.trim();

    //Incase the form is submitted with no name text, it generates a message reminding the user it is required. Else it is successful //
    if (FLnameValue === '') {
        setError(FLname, 'Name is required');
        isValid = false;
    } else {
        setSuccess(FLname);
    }

    //Incase the form is submitted with no email text, it generates a message reminding the user it is required. Else it is successful //

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else {
        setSuccess(email);
    }

    return isValid;
};
