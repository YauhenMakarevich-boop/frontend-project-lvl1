import readlineSync from 'readline-sync'

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function isEven(number) {
    return number % 2 === 0;
}

export default function gameIsEven(name) {
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

    let correctAnswers = 0;
    let correctAnswer;

    while (correctAnswers < 3){
        const number = getRandomNumber();
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question(`Your answer: `).toLowerCase();
        
        if (isEven(number)){
            correctAnswer = 'yes';
        } else{
            correctAnswer = 'no'
        }
        
        if (userAnswer === correctAnswer) {
            console.log(`Correct!`);
            correctAnswers++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
    
}





