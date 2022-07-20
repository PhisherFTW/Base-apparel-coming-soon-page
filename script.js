document.getElementsByClassName('email')[0].placeholder = 'Email Address';

document.querySelector(".button").addEventListener("click", getInputFromTextBox);
let errorimg = document.querySelector('.errorimg');
let validemail = document.querySelector('.validemail');
errorimg.style.display = 'none';
validemail.style.display = 'none';


function getInputFromTextBox() {
    var input = document.querySelector('.email'). value;
    for( i = 0; i < input.length; i++) {
        console.log(input[i]);
        if (input.includes('@')) {
            errorimg.style.display = 'none';
            validemail.style.display = 'none';
        } else {
            console.log('invalid?')
            errorimg.style.display = 'inline';
            validemail.style.display = 'inline';
        }
    }
}




