const input = document.querySelector ('.Login-input');
const button = document.querySelector('.Login-buton');
const form = document.querySelector('.Login');



const validateInput = ({ target }) => {
if (target.value.length > 2) {
    button.removeAttribute('disabled');
    return;
} 
    button.setAttribute ('disabled', '')

}
 
const handleSubmit = (event) => {
    event.preventDefault();
 console.log('logando...');

  localStorage.setItem('player', input.value);
 window.location = '../Pages/Jogo.html';
  

}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);