const container = document.querySelector('.container');
const signinLink = document.querySelector('.signin-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    container.classList.add('active');
});

signinLink.addEventListener('click', ()=>{
    container.classList.remove('active');
});