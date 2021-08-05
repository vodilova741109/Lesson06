'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
function guessNumber(i){
    i--;
    let num = prompt("Угадай число от 1 до 100", 100); 

    let start = function() {
       
       if (num === null){
        alert('"Игра окончена, до свидания!');
       } else if (isNaN(num) || num > 100 || num < 1){
        checTypeNumber();
       }  else {
        checNumber(9);  
       }
      }; 
      
      start();
    
    function checTypeNumber() {
        num = prompt("Введи число от 1 до 100", 100);
        if (num === null){
            alert('"Игра окончена, до свидания!');
           } else if (!isNumber(num) || num > 100 || num < 1) {
            checTypeNumber();  
            }  else {
               checNumber(9);   
            }     
    };       
    // checTypeNumber();
    
    function checNumber(a){
        if (num > a ) {
            alert('Загаданное число меньше, осталось попыток ' + i);           
            if( i > 0){
                guessNumber(i);
            } else {
                if( confirm('Хотели бы сыграть еще?')){
                    guessNumber(10);
                }     
            }
        } else if (num < a &&  num !== null) {
            alert('Загаданное число больше, осталось попыток ' + i); 
            if( i > 0){
                guessNumber(i);
            } else {
                if( confirm('Хотели бы сыграть еще?')){
                    guessNumber(10);
                }     
            }
        } else if (+num === a) {
           
                alert('Поздравляю, Вы угадали!!!');
                if( confirm('Хотели бы сыграть еще?')){
                    guessNumber(10);
                }     
        
            }  
    }
}  

guessNumber(10);


