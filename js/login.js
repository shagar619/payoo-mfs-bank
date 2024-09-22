
// form submit reloading the page


document.querySelector('#login-btn').addEventListener ('click', (event) => {
    event.preventDefault();                   // prevent reloading

    let phoneNumber = document.querySelector('#phone-number').value;
    let pinNumber = document.querySelector('#pin-number').value;

    // console.log(phoneNumber, pinNumber);

    if (phoneNumber === '7777' & pinNumber === '1234') {
        // console.log('You are logged in');
        
        window.location.href = '/home.html';
    } else {
        alert('Wrong phone number or pin');
    }
});