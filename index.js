const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check-button");
const message1 = document.querySelector("#error-message1");
const message2 = document.querySelector("#error-message2");
const next = document.querySelector("#next");
const check = document.querySelector("#check");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
next.style.display = "none";
message1.style.display = "none";
check.style.display = "none";


function calculateChange(amount){
    for (let i=0; i<availableNotes.length; i++ ){
        const numberOfNotes = Math.trunc(amount/availableNotes[i]);
        amount %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
} 

function showMessage(msg,msgtxt){
    msg.style.display = "block";
    msg.innerText = msgtxt;
}
function showNext(){
    if (Number(billAmount.value) > 0){
        message1.style.display = "none";
        next.style.display = "block";
        check.style.display = "none";
        nextButton.style.display = "none";
    }
    else{
        showMessage(message1,"Invalid Bill Amount");
    }
    
}
function showCheck(){
    if (Number(cashGiven.value) >= Number(billAmount.value)){
        message2.style.display = "none";
        check.style.display = "block";
        validateCashAndBillAmount();
    }
    else{
        check.style.display = "none";
        showMessage(message2,"The cash provided should atleast be equal to the bill amount.");
    }
}
function validateCashAndBillAmount(){
        var changeCash = Number(cashGiven.value) - Number(billAmount.value);
        calculateChange(changeCash);
}

nextButton.addEventListener('click', showNext);
checkButton.addEventListener('click', showCheck);