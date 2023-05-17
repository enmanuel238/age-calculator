const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const inputWrapper = document.querySelectorAll(".input-wrapper div");

const messageFieldRequired = 'This field is required';


const button = document.querySelector(".button");


button.addEventListener("click", calculate)


function calculate(){
    validations()

}

function validations(){
    if (year.value === ''){
        createAlert(messageFieldRequired, 2);
    }
    if (month.value === ''){
        createAlert(messageFieldRequired, 1);
    }
    if (day.value === ''){
        createAlert(messageFieldRequired, 0);
        
    }
    
    
}



function createAlert(message, child){
    const alert = document.createElement("P");
    alert.textContent = message;
    alert.classList.add('alert')
    inputWrapper[child].appendChild(alert);
    
    // colors()
}

function colors(){
    let child = inputWrapper[i].firstChild

    for(let i = 0; i < inputWrapper.length; i++){
        child.nextElementSibling.classList.add('t-red')
        child.inputWrapper[i].firstChild.nextElementSibling.nextElementSibling.classList.add('b-red')
    }
    
}
function clearHTML(){
    const inputAlert = document.querySelectorAll(".alert");

    for(let i = 0; i < inputWrapper.length; i++){
        inputWrapper[i].removeChild(inputAlert[i]);
    }
}
