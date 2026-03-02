


const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", function(e){
  e.preventDefault();

  inputs.forEach(input => {

    if(input.value.trim() === ""){
      showError(input, input.placeholder + " cannot be empty");
    }
    else if(input.type === "email" && !validateEmail(input.value)){
      showError(input, "Looks like this is not an email");
    }
    else{
      removeError(input);
    }

  });
});

function showError(input, message){
  const parent = input.parentElement;
  parent.classList.add("error");
  parent.querySelector("small").innerText = message;
}

function removeError(input){
  input.parentElement.classList.remove("error");
}

function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

