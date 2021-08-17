
document.getElementById('banking-body').addEventListener('click', function () {

  document.body.style.backgroundColor = 'yellow';


});
document.getElementById('banking-body').addEventListener('dblclick', function () {

  document.body.style.backgroundColor = '#00ff21';

});




// handle deposit Option

document.getElementById('deposit-button').addEventListener('click', function () {

  // get input from user 

  const depositeInput = document.getElementById('deposit-input');
  const depositNewAmountText = depositeInput.value;
  const depositNewAmount = parseFloat(depositNewAmountText);


  const previousDeposit = document.getElementById('previous-deposit');

  const previousDepositText = previousDeposit.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  const newDepositTotal = previousDepositAmount + depositNewAmount;

  previousDeposit.innerText = newDepositTotal;


  // update user balance 

  const totalBalance = document.getElementById('balance-total');
  const previousBalanceText = totalBalance.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceText);

  const updateTotalBalance = previousBalanceAmount + depositNewAmount;


  totalBalance.innerText = updateTotalBalance;



  depositeInput.value = ' ';

  console.log(previousDepositAmount);
});


// handle the withdraw option



document.getElementById('withdraw-button').addEventListener('click', function () {

  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawInputAmount = withdrawInput.value;
  const withdrawAmmount = parseFloat(withdrawInputAmount);


  const previousWithdraw = document.getElementById('previous-withdraw');

  const previousWithdrawText = previousWithdraw.innerText;

  const previousWithdrawAmount = parseFloat(previousWithdrawText);

  const totalWithdraw = withdrawAmmount + previousWithdrawAmount;


  previousWithdraw.innerText = totalWithdraw;


  // balance update after deposite



  const previousBalance = document.getElementById('balance-total');
  const previousTextBalance = previousBalance.innerText;
  const previousAmountBalance = parseFloat(previousTextBalance);


  const UpdateBalance = previousAmountBalance - withdrawAmmount;

  previousBalance.innerText = UpdateBalance;


  withdrawInput.value = ' ';

});
