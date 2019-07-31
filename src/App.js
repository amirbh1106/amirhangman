import React , {useState} from 'react';
import './App.css';
import { TheHangMan } from './components/thehangman';
import {Game} from './components/game';
import {Letters} from './components/Letters';
import moviesobj from './movies.json'
import {WinOrLose} from './components/winorlose'

function getRandomMovieName() {
  return Math.floor(Math.random() * moviesobj.length)
}
//get number between 0 and number of movie titles
const randomnum = getRandomMovieName();

// use the number to choose random movie name
const moviechosen = moviesobj[randomnum].title;
console.log(moviechosen)
const initialGuesses = [];
for(let i = 0; i < moviechosen.length * 0.25; i++){
  const c = moviechosen[Math.floor(Math.random() * moviechosen.length)]
  initialGuesses.push(c)
  }
  
function App() {
  const [failedstate, setfailedstate] = useState(0);
  const [guessesstate, setguessesstate] = useState(initialGuesses);
  const [endstate , setendstate] = useState(0)


  let words = (moviechosen.split(''));
  let gameword = [];
  for(var i = 0; i < words.length; i++){
    if(words[i] === ""){
      gameword.push(words[i] === "-")
    } 
    gameword.push(words[i])      
  }


  function onletterclick(letter){
      let isLetterInWord = words.includes(letter.toLowerCase()) || words.includes(letter.toUpperCase());
      console.log(guessesstate)
      
      if(guessesstate.includes(letter)){}
      else if(!isLetterInWord) {
        setfailedstate(failedstate + 1);    
      }
      setguessesstate(guessesstate.concat(letter));
      
  }

  let arr = words.filter(c => c !== ' ').map(c => guessesstate.includes(c.toLowerCase()));
  console.log(arr);
    console.log(endstate)
   if(6 <= failedstate && !endstate ){
     setendstate(1)
   }else if(failedstate <= 5 && !arr.includes(false) && !endstate ){
     setendstate(1)
     console.log("hay1")
   }
      
    





  return (
    <div>
      <img className={'headline'} src={require('./components/pics/Group 8.png')} alt={"normal"}></img>
      <TheHangMan failed={failedstate}/>
      <Game  Game={words} guesses={guessesstate}/>
      <Letters  letterclicked={onletterclick} guesses={guessesstate}/>
      <WinOrLose failed={failedstate} end={endstate}/>
    </div>
  );

}

export default App;
