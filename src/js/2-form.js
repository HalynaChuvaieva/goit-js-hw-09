const formData = {
    email: '',
    message: ''
};
const form = document.querySelector('.feedback-form');

form.elements.email.value = JSON.parse(localStorage.getItem("feedback-form-state"))?.email ?? "";
form.elements.message.value = JSON.parse(localStorage.getItem("feedback-form-state"))?.message ?? "";

form.addEventListener('input', handleInput);
function handleInput(){
    // if(event.target.getAttribute('name')==='email'){
    //     formData.email = event.target.value.trim();
    // }
    // if(event.target.getAttribute('name')==='message'){
    //     formData.message = event.target.value.trim();
    // }
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

form.addEventListener('submit', handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    if(form.elements.email.value === '' || form.elements.message.value === ''){
        alert('Fill please all fields');
    }
    else{
        console.log(formData);
        formData.email = '';
        formData.message = '';
        // console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
        
        localStorage.removeItem("feedback-form-state");
        form.reset();
    }
}

