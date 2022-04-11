const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('passwrd2');



const isValidEmail = (email) => {
  const regex =
    /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

  return regex.test(String(email).toLocaleLowerCase());
};

const showError = (input,message)=>{
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

const showSuccess = (input)=>{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

const getFieldName = (input)=>{
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);


}

const checkRequired = (inputArray)=>{
  inputArray.forEach(input => {
    if(input.value.trim() === ''){
      showError(input,`${getFieldName(input)} is required`)
    }
    else{
      showSuccess(input)
    }
    
  });



}
