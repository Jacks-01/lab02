'use strict';

let firstName = prompt('What is your first name?');
// eslint-disable-next-line no-unused-vars
let correctAnswers = 0;

// eslint-disable-next-line no-unused-vars
function displayName() {

  document.writeln(`Welcome to my website ${firstName}!`);
  console.log(firstName);

}

function questionOne(){
  //ask for user input
  let question1 = prompt('Did I go to Linn-Mar High School?');
  //get input then to lower case it

  let question1Lower = question1.toLowerCase();
  //then if conditions to check validate user input
  if (question1Lower === 'yes' || question1Lower === 'y') {
    //console.log('correct')
    alert('Correct!');
    correctAnswers++;

  } else if (question1Lower === 'no' || question1Lower === 'n') {
    //console.log('incorrect')
    alert('Incorrect!');
  }
}

function questionTwo(){
  //ask for user input
  let question2 = prompt('Am I 21 years old?');
  //get input then to lower case it

  let question2Lower = question2.toLowerCase();
  //then if conditions to check validate user input
  if (question2Lower === 'yes' || question2Lower === 'y') {
    //console.log('correct')
    alert('Correct!');
    correctAnswers++;
  } else if (question2Lower === 'no' || question2Lower === 'n') {
    //console.log('incorrect')
    alert('Incorrect!');
  }
}

function questionThree(){
  //ask for user input
  let question3 = prompt('Did I go to Kirkwood Community College?');
  //get input then to lower case it

  let question3Lower = question3.toLowerCase();
  //then if conditions to check validate user input
  if (question3Lower === 'yes' || question3Lower === 'y') {
    //console.log('correct')
    alert('Correct!');
    correctAnswers++;

  } else if (question3Lower === 'no' || question3Lower === 'n') {
    //console.log('incorrect')
    alert('Incorrect!');
  }
}

function questionFour(){
  //ask for user input
  let question4 = prompt('Did I major in social work?');
  //get input then to lower case it

  let question4Lower = question4.toLowerCase();
  //then if conditions to check validate user input
  if (question4Lower === 'yes' || question4Lower === 'y') {
    //console.log('correct')
    alert('Correct!');
    correctAnswers++;

  } else if (question4Lower === 'no' || question4Lower === 'n') {
    //console.log('incorrect')
    alert('Incorrect!');
  }
}

function questionFive(){
  //ask for user input
  let question5 = prompt('Am I a software developer?');
  //get input then to lower case it

  let question5Lower = question5.toLowerCase();
  //then if conditions to check validate user input
  if (question5Lower === 'yes' || question5Lower === 'y') {
    //console.log('correct')
    alert('Correct!');
    correctAnswers++;

  } else if (question5Lower === 'no' || question5Lower === 'n') {
    //console.log('incorrect')
    alert('Incorrect!');
  }
}

function questionSix(){
  let attempts = 0;
  let needed = true;
  let question6;
  // While both of these conditions are true, loop up to 4 times, if user exceeds 4 tries then the loop will end and tell them the answer.
  while (needed && attempts <= 4) {
    // prompts the user for an input, then converts the string to a number
    question6 = Number(prompt('How old am I?'));
    if (question6 < 21) {
      alert('too low! Try guessing a higher number');
      attempts++;
    }
    else if (question6 > 21) {
      alert('too high! Try guessing a lower number');
      attempts++;
    }

    else if (question6 === 21) {
      alert('Ding Ding Ding!');
      needed = false;
      correctAnswers++;
    }
    else {
      //if they enter cat :^)
      alert('Enter a number please :)!');
    }
  }
  //If the user exceeds 4 tries
  if (needed && attempts >= 4) {
    alert('You are out of attempts! The correct answer is 21');
  }
}

// eslint-disable-next-line no-unused-vars
function questionSeven()
{
  let attempts1 = 6;
  let needed1 = true;
  let answerKey = ['&&', '||', '!'];
  let question7;

  while (needed1 && attempts1 > 0) {
    console.log('sentinal', needed1);
    console.log('attempts1 at top of while', attempts1);
    question7 = prompt('Name a valid logical operator in JavaScript');

    if (answerKey.indexOf(question7) >= 0) {
      alert('Good Job!');
      needed1 = false;
    } else {
      attempts1 -= 1;
      if (attempts1 === 0) {
        alert(`Sorry! You are out of attempts! Possible answers include: ${answerKey}`);
      } else {
        alert(`Try again! you have ${attempts1} remaining`);
      }
    }
  }
} //function closes.

function takeQuiz(){
  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
  questionSeven();
  questionEight();
}

//Stretch Goals

function questionEight() {
  let questions = [['How old am I?', '507'], ['What color is the sky', 'you are a color'], ['whats not a pet.', 'snakes']];

  for(let i = 0; i < questions.length; i++){
    let answer = askUser(questions[i][0], questions[i][1]);

    if(answer){
      correctAnswers++;
      //call function
      alert('Yea you were right.');
    } else {
      //call function
      alert('You were incorrect.');
    }
  }

}

/**
 * prompts user with question and compares answer with supplied question.
 * @param {string} question text displayed to user in prompt
 * @param {string} answer is the value of the questions answer.
 * @returns true if answers match and not if its false.
 */
function askUser(question, answer){
  let userResponse = prompt(question);
  return answer === userResponse;
}
