'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

const getRandomNum = function(a, b){
    const min = Math.ceil(Math.min(a, b));
    const max = Math.ceil(Math.max(a, b));
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomNum(1, 100));

function guessNumber(i){    
    i--;
    const randomNum = getRandomNum(1, 100);
    console.log(randomNum);
 
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
      
        
        function checNumber(){
            if (num > randomNum ) {
             
                alert('Загаданное число меньше, осталось попыток ' + i);           
                if( i > 0){
                    guessNumber(i);
                } else {
                    if( confirm('Хотели бы сыграть еще?')){
                        guessNumber(10);
                    }     
                }
            } else if (num < randomNum &&  num !== null) {
                alert('Загаданное число больше, осталось попыток ' + i); 
                if( i > 0){
                    guessNumber(i);
                } else {
                    if( confirm('Хотели бы сыграть еще?')){
                        guessNumber(10);
                    }     
                }
            } else if (+num === randomNum ) {
               
                    alert('Поздравляю, Вы угадали!!!');
                    if( confirm('Хотели бы сыграть еще?')){
                        guessNumber(10);
                    }     
            
                }  
        }
    
   
}  

guessNumber(10);


