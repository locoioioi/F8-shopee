var register = document.querySelector('.nav__register');
var modalRegister = document.querySelector('.modal__register-display');
var modalRegisterRemove = document.querySelector('.modal__register-remove');

// open register
register.addEventListener('click', function () {
    modalRegister.classList.add('modal-display');
});
// close register
modalRegisterRemove.addEventListener('click', function () {
    modalRegister.classList.remove('modal-display');
});