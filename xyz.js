'use strict';




//
//     // document.querySelector('body').textContent = rand;
// document.querySelector('.guess').textContent = 45;

let rand = Math.trunc(Math.random() * 20)+1;
console.log(rand);

let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.again').addEventListener('click', function () {
    let ref = Math.trunc(Math.random() * 20) + 1;
    rand = ref;
    console.log(ref);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = " ";
    score = 20;
    document.querySelector('.score').textContent = score;


});

document.querySelector('.check').addEventListener('click', function () {
   
    let num = Number(document.querySelector('.guess').value);
    if (!num) {
        document.querySelector('.message').textContent = 'No Value!';
    }
    
    if(score>1) {
        if (num === rand) {
            document.querySelector('.message').textContent = 'Correct Number!';
          
            document.querySelector('.number').textContent = rand;

            document.querySelector('body').style.backgroundColor = '#32CD32';
            highscore = score;
            if (score > highscore) {
                document.querySelector('.highscore').textContent = score;
            }
            else {
                document.querySelector('.highscore').textContent = highscore;
            }

        }
        if (num > rand) {
            document.querySelector('.message').textContent = 'Too High!';
            document.querySelector('body').style.backgroundColor = '#C70039';
            document.querySelector('.number').textContent = '?';
            score--;
            document.querySelector('.score').textContent = score;
        }
        if (num < rand) {
            document.querySelector('.message').textContent = 'Too Low!';
            document.querySelector('body').style.backgroundColor = '#E4D00A';
            document.querySelector('.number').textContent = '?';
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
    else {
        score=0;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Better Luck Next Time!';
    }
});
//     else {
//         document.querySelector('.message').textContent = "Wrong Number!";
//     }
// });
