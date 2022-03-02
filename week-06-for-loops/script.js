
const speech = `"Let me tell you something you already know. The world ain't all
sunshine and rainbows. It's a very mean and nasty place and I don't care how
tough you are it will beat you to your knees and keep you there permanently
if you let it.

You, me, or nobody is gonna hit as hard as life. But it ain't about how hard
ya hit. It's about how hard you can get hit and keep moving forward. How much
you can take and keep moving forward. That's how winning is done! Now if
you know what you're worth then go out and get what you're worth.

But ya gotta be willing to take the hits, and not pointing fingers saying
you ain't where you wanna be because of him, or her, or anybody!
Cowards do that and that ain't you! You're better than that!"`;


const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');


const wordsArray = speechPunctuationRemoved.split(/\s+/);


function displayShortWords() {
  const shortWordsElement = document.getElementById('short-words');


  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if(word.length < 4) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement);
    }
  }
}

function displayLetterBWords(){
  const letterWordsElement = document.getElementById('letter-words');

  for(let word of wordsArray){
    if(word.startsWith('b')){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      letterWordsElement.appendChild(wordElement);
    }
  }
}

function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if(word.length > 6) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);

    }
  }
}

function displayThirdWords(){
  const thirdWordsElement = document.getElementById('third-words');

  for(let i = 2; i <= 300; i += 3){
    const word = wordsArray[i];
    if(word){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      thirdWordsElement.appendChild(wordElement);
    }
  }
}

function displayUncommonWords(){
  let commonWords = ['the' , 'be' , 'to' , 'of' , 'and' , 'a' , 'in' , 'that' , 'have' , 'i' ,
  'it' , 'for' , 'not' , 'on' , 'with' , 'as' , 'you' , 'do' , 'at' , 'me' , 'all' , 'are' ,
  'if' , 'let' , 'will' , 'or' , 'is' , ];

  let uncommonWordsElement = document.getElementById('uncommon-words');

  for(let word of wordsArray){
    if(!commonWords.includes(word.toLowerCase())){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      uncommonWordsElement.appendChild(wordElement);
    }
  }
}



function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayShortWords();

  displayLetterBWords();

  displayLongWords();

  displayThirdWords();

  displayUncommonWords();


}
