import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

function getRandomProgression() {
    const length = Math.floor(Math.random() * 6) + 5;
    const firstItem = Math.floor(Math.random() * 100) + 1;
    const difference = Math.floor(Math.random() * 10) + 1;
    const progression = [];
    
    for (let i = 0; i < length; i++) {
        progression.push(firstItem + i * difference);
    }
    
    return progression;
}

function progressionWithHidden(progression) {
    const randomIndex = Math.floor(Math.random() * progression.length);
    const hiddenValue = progression[randomIndex];
    progression[randomIndex] = "..";
    
    return {
        question: progression.join(' '),
        answer: hiddenValue
    };
}

function gameProgression(name) {  
    console.log("What number is missing in the progression?");
    let correctAnswers = 0;
    
    while (correctAnswers < 3) {
       
        const progression = getRandomProgression();
        const { question, answer } = progressionWithHidden(progression);
        
        console.log('Question:', question);
        const userAnswer = Number(readlineSync.question("Your answer: "));
        
        if (userAnswer === answer) {
            console.log('Correct!');
            correctAnswers++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    
    console.log(`Congratulations, ${name}!`);
}

const name = greeting();
gameProgression(name);