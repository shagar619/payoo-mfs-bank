// document.querySelector('#add-money-btn').addEventListener('click', (event) => {
//     event.preventDefault();
    
//     let addMoneyInput = document.querySelector('#input-add-money').value;

//     let pinNumber = document.querySelector('#input-pin-number').value;


//     if (pinNumber === '7777') {

//         const balance = document.getElementById('account-balance').innerText;

//         let addMoneyNumber = parseFloat(addMoneyInput);
//         let balanceNumber = parseFloat(balance);

//         let newBalance = addMoneyNumber + balanceNumber;

//         document.querySelector('#account-balance').innerText = newBalance;

        

//     } else {
//         alert('Failed to add money!Please try again.');
//     }
// });
























// OR,





                        // Common functions Shared (Utilities)

document.getElementById('add-money-btn').addEventListener('click', (event) => {
    event.preventDefault();


    const addMoney = getInputFieldValueById('input-add-money');

    const pinNumber =getInputFieldValueById('input-pin-number');

    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;

        let p = document.createElement('p');
        p.innerText = `added: ${addMoney} Tk. New Balance: ${newBalance} `;

        document.getElementById('transaction-container').appendChild(p);

    } else {
        alert('Failed to add money! Please try again later.');
    }
});
