const loginArea = document.getElementById('login-area'),
    dashboard = document.getElementById('dashboard'),
    deposit = document.getElementById('deposit'),
    withdraw = document.getElementById('withdraw'),
    balance = document.getElementById('balance'),
    depositInput = document.getElementById('deposit-input'),
    withdrawInput = document.getElementById('withdraw-input'),
    depositBtn = document.getElementById('deposit-btn'),
    withdrawBtn = document.getElementById('withdraw-btn'),
    submitBtn = document.getElementById('submit-btn');


submitBtn.addEventListener('click', () => {
    loginArea.style.display = 'none';
    dashboard.classList.remove('d-none');
    try {
      // Get values
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
  
      // Validate email
      if(!emailInput.value.includes('@')) {
        throw new Error('Invalid email');
      }
  
      // Validate password length
      if(passwordInput.value.length < 8) {
        throw new Error('Password must be at least 8 characters');
      }
  
      // Hide login and show dashboard
      loginArea.style.display = 'none'; 
      dashboard.classList.remove('d-none');
  
    } catch(err) {
      alert(err); // Show error message
  
    } finally {
      // Runs regardless of try/catch result
    }
  });


depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    const depositValue = Number(deposit.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) + Number(value);
    deposit.innerText = depositValue;
    balance.innerText = balanceValue;
    depositInput.value = '';
})


withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value;
    if (Number(value) === 0) {
        alert("You don't have any balance to withdraw");
    } else if (Number(value) > Number(balance.innerText)) {
        alert("You don't have that much balance to withdraw");
    } else {
        const balanceValue = Number(balance.innerText) - Number(value);
        const withdrawValue = Number(withdraw.innerText) + Number(value);
        withdraw.innerText = withdrawValue;
        balance.innerText = balanceValue;
        withdrawInput.value = '';
    }
})