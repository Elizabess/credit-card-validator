import { isValidCardNumber, getCardType } from './validator';

document.getElementById('app').innerHTML = `   
    <div> 
        <h1>Credit Card Validator</h1>
        <input type="text" id="card-number" placeholder="Enter card number"/>
        <button id="validate-button">Validate</button>
        <div id="result"></div>
    </div>`; 

document.getElementById('validate-button').addEventListener('click', () => { 
    const cardNumber = document.getElementById('card-number').value.replace(/\s+/g, ''); 
    const cardType = getCardType(cardNumber);
    
    document.getElementById('result').innerText = isValid ? `Valid ${cardType}` : 'Invalid card number'; 
});