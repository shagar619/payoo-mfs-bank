// document.querySelector('#cash-out-btn').addEventListener('click', (event) => {
//     event.preventDefault();

//     let cashOutInput = document.querySelector('#input-cash-out').value;

//     let pinNumber = document.querySelector('#cash-out-pin-number').value;


//     if (pinNumber === '7777') {

//         let balance = document.getElementById('account-balance').innerText;

//         let newBalance = parseFloat(balance) - parseFloat(cashOutInput);

//         document.querySelector('#account-balance').innerText = newBalance;
        
//     } else {
//         alert('Failed to cash out!Please try again');
//     }
// });











// document.querySelector('#btn-show-cash-out').addEventListener('click', () => {
//     document.querySelector('#cash-out-form').classList.remove('hidden');

//     document.querySelector('#add-money-form').classList.add('hidden');
// });




// document.querySelector('#btn-show-add-money').addEventListener('click', () => {
//     document.querySelector('#add-money-form').classList.remove('hidden');

//     document.querySelector('#cash-out-form').classList.add('hidden');
// });













// OR,


document.getElementById('btn-show-add-money').addEventListener('click', () => {
    showSectionById('add-money-form');
});


document.getElementById('btn-show-cash-out').addEventListener('click', () => {
    showSectionById('cash-out-form');
});

document.getElementById('btn-show-transaction').addEventListener('click', () => {
    showSectionById('transactions-section');
});















// OR,


document.getElementById('cash-out-btn').addEventListener('click', (event) => {
    event.preventDefault();

    let cashOut = getInputFieldValueById('input-cash-out');
    let pinNumber = getInputFieldValueById('cash-out-pin-number');

    if (pinNumber === 1234) {
        let balance = getTextFieldValueById('account-balance');

        if (cashOut > balance) {
            alert('you do not have sufficient balance!');
            return;
        }


        let newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;

        let div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class="text-2xl font-bold text-center">Cash Out</h4>
        <p>${cashOut} withdraw. New Balance: ${newBalance}</p>
        `

        document.getElementById('transaction-container').appendChild(div);
    } else {
        alert('Failed to cash out! Please try again later.');
    }
});