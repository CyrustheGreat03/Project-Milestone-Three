// The client-side Form Validation video on D2L helped me write this code// 


//This is to reference each element from contact.html// 
const form = document.getElementById('form');
const FLname = document.getElementById('FLname');
const email = document.getElementById('email');

// This is to stop the form from submitting without validation //
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs(); 

});

//This is used to generate the error message when textbox is empty
const setError = (element, message) => {
    const inputs = element.parentElement; 
    const errorDisplay = inputs.querySelector('.error');

    errorDisplay.innerText = message;
}

//This is to get gather the values of each input //
const validateInputs = () => {
    const FLnameValue = FLname.value
    const emailValue = email.value

    //Incase the form is submitted with no name text, it generates a message reminding the user it is required. Else it is successful //
    if (FLnameValue === '' ) {
        setError(FLname, 'Name is required');
    } else {
        setSuccess(FLname); 
    }

    //Incase the form is submitted with no email text, it generates a message reminding the user it is required. Else it is successful //

    if(emailValue === '') {
        setError(email, 'Email is Required');    
   
    } else {
            setSuccess(email);
        }
    
};



