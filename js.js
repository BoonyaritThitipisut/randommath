function Question() {
    let answer;
    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = (num1 / num2).toFixed(2);
            break;
    }

    const question = `${num1} ${operator} ${num2}`;
    return { question, answer };
}
const num1 = Math.floor(Math.random() * 100) + 1;
const num2 = Math.floor(Math.random() * 100) + 1;
const operators = ['+', '-', '*', '/'];
const operator = operators[Math.floor(Math.random() * operators.length)];

let { question, answer } = Question();
document.querySelector('#question').textContent = question;

document.querySelector('#checkButton').addEventListener('click', function() {
    const userAnswer = parseFloat(document.querySelector('#userAnswer').value);
    const resultElement = document.querySelector('#result');
    const scoreElement = document.querySelector('#score');

    if (userAnswer === parseFloat(answer)) {
        resultElement.textContent = 'คำตอบถูกต้อง!';
        scoreElement.textContent = parseInt(scoreElement.textContent) + 1;
    } else {
        resultElement.textContent = `คำตอบผิด! คำตอบที่ถูกต้องคือ ${answer}`;
    }

    ({ question, answer } = Question());
    document.querySelector('#question').textContent = question;
    document.querySelector('#userAnswer').value = '';
});