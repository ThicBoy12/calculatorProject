let calculation = localStorage.getItem('calc');
     document.querySelector('.js-calc-area').innerHTML = calculation;

     if(calculation===null)
      calculation='';
    
    function updateCalculation(x){
      calculation+=x;
      document.querySelector('.js-calc-area').innerHTML = calculation;
      localStorage.setItem('calc', calculation);
    }

    function clearCalc(){
      calculation='';
      localStorage.removeItem('calc');
    }
