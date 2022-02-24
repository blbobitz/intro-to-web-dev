
function submitAnswerOne() {

  const answerOneInput = document.getElementById('answer-one-input');

  const answerOne = answerOneInput.value;

  if(answerOne == 'Eagles') {
    alert("That's right!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'Steelers') {
    alert("I can't believe you put this answer and you don't deserve a hint.");
  } else if(answerOne == 'Ravens') {
    alert("Close! Try a bit northeast.");
  }
  else {
    alert("Wrong! Hint: My favorite team's mascot is a bird!")
  }
}


function submitAnswerTwo() {

  const answerTwoInput = document.getElementById('answer-two-input');

  const answerTwo = answerTwoInput.value;

  if(answerTwo == 33) {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  } else if(answerTwo < 33) {
    alert('The answer is higher.');
  } else {
    alert('The answer is lower.')
  }
}

function submitAnswerThree() {

  const answerThreeInput = document.getElementById('answer-three-input');

  const answerThree = answerThreeInput.value;

  if(answerThree == 'The Ringer') {
    alert("That's right!");
    hide('question-three');
    show('question-four');
  } else if(answerThree == 'Jackass') {
    alert('Great choice but not quite, it came out in 2005!');
  } else {
    alert('Wrong! Hint: The movie stars Johnny Knoxville!')
  }
}

function submitAnswerFour() {

  const answerFourInput = document.getElementById('answer-four-input');

  const answerFour = answerFourInput.value;

  if(answerFour == 'True') {
    alert("That's right! you have good taste.");
    hide('question-four');
    show('done');
  } else {
    alert("How could you get this one wrong? I'm disappointed.")
  }
}



function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}


function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}
