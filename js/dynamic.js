'use strict';

let firstName = prompt('What is your first name?')

function displayName(){

  document.writeln(`Welcome to my website ${firstName}!`)
  console.log(firstName);

}

function takeQuiz(){
  //ask for user input
  let question1 = prompt('Did I go to Linn-Mar High School?');
  //get input then to lower case it

  let question1Lower = question1.toLowerCase();
  //then if conditions to check validate user input
  if(question1Lower === 'yes' || question1Lower ==='y'){
    //console.log('correct')
    alert('Correct!')

  }else if(question1Lower === 'no' || question1Lower === 'n'){
    //console.log('incorrect')
    alert('Incorrect!')
  }

  //ask for user input
  let question2 = prompt('Am I 21 years old?');
  //get input then to lower case it

  let question2Lower = question2.toLowerCase();
  //then if conditions to check validate user input
  if(question2Lower === 'yes' || question2Lower ==='y'){
    //console.log('correct')
    alert('Correct!')

  }else if(question2Lower === 'no' || question2Lower === 'n'){
    //console.log('incorrect')
    alert('Incorrect!')
  }

  //ask for user input
  let question3 = prompt('Did I go to Kirkwood Community College?');
  //get input then to lower case it

  let question3Lower = question3.toLowerCase();
  //then if conditions to check validate user input
  if(question3Lower === 'yes' || question3Lower ==='y'){
    //console.log('correct')
    alert('Correct!')

  }else if(question3Lower === 'no' || question3Lower === 'n'){
    //console.log('incorrect')
    alert('Incorrect!')
  }

  //ask for user input
  let question4 = prompt('Did I major in social work?');
  //get input then to lower case it

  let question4Lower = question4.toLowerCase();
  //then if conditions to check validate user input
  if(question4Lower === 'yes' || question4Lower ==='y'){
    //console.log('correct')
    alert('Correct!')

  }else if(question4Lower === 'no' || question4Lower === 'n'){
    //console.log('incorrect')
    alert('Incorrect!')
  }

  //ask for user input
  let question5 = prompt('Am I a software developer?');
  //get input then to lower case it

  let question5Lower = question5.toLowerCase();
  //then if conditions to check validate user input
  if(question5Lower === 'yes' || question5Lower ==='y'){
    //console.log('correct')
    alert('Correct!')

  }else if(question5Lower === 'no' || question5Lower === 'n'){
    //console.log('incorrect')
    alert('Incorrect!')
  }

}

// let totalCorrect = 0;
// let totalWrong = 0;

// function promptQuiz(totalCorrect, totalWrong){

//   let question1 = prompt('Did I go to Linn-Mar High School?');

//     question1 = (question1.toUpperCase);
//     console.log(question1);

//     if( question1 === 'YES'){
//       alert('Correct!');
//       totalCorrect += 1;
      
//     }
//         else{
//         alert('Wrong!');
//         totalWrong += 1;

//       }

// console.log(`you got ${totalCorrect} correct`);
// console.log(`you got ${totalWrong} wrong`);
  // let question2 = prompt('How old am I?');
  // console.log(question2)
  // if(question2 === '21')

  // let question3 = prompt('What college did I go to?');
  // console.log(question3)




