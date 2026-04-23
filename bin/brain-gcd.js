import readlineSync from 'readline-sync'
import greeting from '../src/cli.js';

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  
  return a;
}


export default function gameGcd(name){
    console.log("Find the greatest common divisor of given numbers.");
    let correctAnswers = 0;
    while (correctAnswers < 3){
        const number1 = getRandomNumber();
        const number2 = getRandomNumber();
        const correctAnswer = gcd(number1,number2);
        
        console.log(`Question: ${number1} ${number2}`);
        const userAnswer = readlineSync.question(`Your answer: `);

        if(Number(userAnswer) === correctAnswer){
            console.log(`Correct!`);
            correctAnswers++;
        }else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}
const playerName = greeting();
gameGcd(playerName);


