  // login butto event hendlar start hare

    document.getElementById('login').addEventListener('click', function(){
      const loginArea = document.getElementById('login-area')
      loginArea.style.display = 'none'
      const transectionArea = document.getElementById('transection-area')
      transectionArea.style.display = 'block'
    })

//login button event handlar end hare

// deposite button add event handlar start hare

    document.getElementById('addDeposit').addEventListener('click', function (){
      const depositInputNumber = getIntoNumber('depositAmount')

      if(depositInputNumber < 0) {
        alert('Deposit Number Cannot be Nagetive.')
      }else{
        upDateBalance('currentDeposit', depositInputNumber)
        upDateBalance('totalBalance', depositInputNumber)
      
      }
    })
//deposit button add event handlar end hare

    function getIntoNumber(id){
      const amount = document.getElementById(id).value
      const amountNumber = parseFloat(amount)
      return amountNumber
    }
// withdraw button add event handlar start hare
  document.getElementById('withdraw').addEventListener('click', function () {
    const withdrawNumber = getIntoNumber('withdraw-input')
    upDateBalance('currentWithdraw', withdrawNumber)
    upDateBalance('totalBalance', -1 * withdrawNumber)
  })
// withdraw button add event handlar end hare

    function upDateBalance(id, depositInputNumber) {
      const currentDeposit = document.getElementById(id).innerText
      const currentDepositNUmber = parseFloat(currentDeposit)
      const total = depositInputNumber + currentDepositNUmber
      document.getElementById(id).innerText = total
    }


