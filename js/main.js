// Login button event handler
var loginBtn = document.getElementById("formSubmit");
loginBtn.addEventListener('submit', function(e){
    e.preventDefault();
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById("transection-area");
    transactionArea.style.display = 'block';
});

// Deposit button event handler
const depositBtn  = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(e){
    const depositAmount = document.getElementById("depositAmount").value;// Show the string type value
    const depositNumber = parseFloat(depositAmount);//Converted String value to Number.
    // const currentDeposit = document.getElementById('currentDeposit').innerText; //For only input tag [innerText]
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // // console.log(totalDeposit);
    // document.getElementById('currentDeposit').innerText = totalDeposit; //transfer value depositAmount to currentDeposit

    UpperSpanText('currentDeposit', depositNumber);
    UpperSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = ""; //empty input

    // const currentBalance = document.getElementById('currentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById('currentBalance').innerText = totalBalance;
});

function UpperSpanText(id, depositNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    if(totalBalance >= 0){
        document.getElementById(id).innerText = totalBalance;
    }    
    else if(isNaN(totalBalance)){
        return true;
    }
}

// Withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(e){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);
    // const currentWithdraw = document.getElementById('currentWithdraw').innerText; 
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = withdrawNumber + currentWithdrawNumber;
    // // console.log(totalWithdraw);
    // document.getElementById('currentWithdraw').innerText = totalWithdraw;
    document.getElementById('withdrawAmount').value = ""; 

    UpperSpanText2('currentWithdraw', withdrawNumber);
    UpperSpanText2('currentBalance', -1 * withdrawNumber);
    // const currentBalance = document.getElementById('currentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber - withdrawNumber;
    // document.getElementById('currentBalance').innerText = totalBalance;
});

function UpperSpanText2(id, withdrawNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + withdrawNumber;

    if(totalBalance >= 0){
        document.getElementById(id).innerText = totalBalance;
    }
    else if(isNaN(totalBalance)){
        return true;
    }
}