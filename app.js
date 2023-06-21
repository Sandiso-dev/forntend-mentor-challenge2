const dismiss = document.querySelector('.dismiss')
let container = document.querySelector('.success-container')
let notAllowed = document.querySelector('.erro-mgs')
const form = document.querySelector('form')
const input = document.querySelector('.input')
let containerTwo = document.querySelector('.container')
const submit = document.querySelector('.submit')

//my form validation function 
function isRight(str) {
    const pattern = new RegExp(/^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i);
    return pattern.test(str)
}

form.addEventListener("submit", (e)=>{
 e.preventDefault();
 const validation = isRight(input.value);
 if(!validation){
    notAllowed.classList.remove('hidden');
    input.classList.add('ERRO');

    //for erro dismissal
    window.addEventListener('click',()=>{
        notAllowed.classList.add('hidden');
    input.classList.remove('ERRO');

    })
 } else if(validation){
    containerTwo.classList.add('hidden')
    container.classList.remove('hidden')
    input.value = '';
 }
})




// then this one to remove the modal
dismiss.addEventListener('click', () => {
    container.classList.add('hidden')
    containerTwo.classList.remove('hidden')
    
})


