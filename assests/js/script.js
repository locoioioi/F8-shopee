var register = document.querySelector('.nav__register');
var login = document.querySelector('.nav__login');
var modal = document.querySelector('.modal__display');
var modalRemove = document.querySelector('.modal__remove');
var registerModal    = document.querySelector('.auth-form__register');
var loginModal = document.querySelector('.auth-form__login');
var switchRegister = document.querySelector('.switch-btn__register');
var switchLogin = document.querySelector('.switch-btn__login');

// open modal
register.addEventListener('click', function () {
    modal.classList.add('modal-display');
    registerOpen()
});
login.addEventListener('click', function () { 
    modal.classList.add('modal-display');
    loginOpen()
});
// close modal
modalRemove.addEventListener('click', function () {
    modal.classList.remove('modal-display');
    registerRemove();
    loginRemove();
});
// switch register
switchRegister.addEventListener('click', function () { 
    registerOpen();
    loginRemove();
});
// switch login
switchLogin.addEventListener('click', function () {
    loginOpen();
    registerRemove();
});
// open register
function registerOpen() {
    registerModal.classList.remove('auth-form__register');
}
// close register
function registerRemove() { 
    registerModal.classList.add('auth-form__register');
}

// open login
function loginOpen() {
    loginModal.classList.remove('auth-form__login');
}
// close login
function loginRemove() { 
    loginModal.classList.add('auth-form__login');
}