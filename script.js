const text = document.querySelector('#email');
const submit = document.querySelector('submit');
submit.addEventListener('click', emailtest);
function emailtest () {
    console.log('it ran')
}

emailtest()