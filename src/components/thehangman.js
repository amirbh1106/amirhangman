import React from 'react';


export function TheHangMan(props){
    
    
   let hangstatus = props.failed;
//    console.count(hangstatus);
    if(hangstatus === 0){
    return(
        <div>
            <img className={'Hangman'} src={require('./pics/Hangman 1.png')} alt={"hangman first state"}></img>
        </div>
        
    )
    }
    else if(hangstatus === 1){
        return(
        <div>
            <img className={'Hangman'} src={require('./pics/Hangman 2.png')} alt={"hangman sec state"}></img>
        </div>
        )
    }
    else if(hangstatus === 2){
        return(
        <div>
            <img className={'Hangman'} src={require('./pics/Hangman 3.png')} alt={"hangman third state"}></img>
        </div>
        )
    }
    else if(hangstatus === 3){
        return(
        <div>
            <img className={'Hangman'} src={require('./pics/Hangman 4.png')} alt={"hangman fourth state"}></img>
        </div>
        )
    }
    else if(hangstatus === 4){
        return(
        <div>
            <img className={'Hangman'} src={require('./pics/Hangman 5.png')} alt={"hangman fifth state"}></img>
        </div>
        )
    }
    else if(hangstatus === 5){
        return(
        <div>
            <img className={'Hangman'} src={require('./pics/Hangman 6.png')} alt={"hangman six state"}></img>
        </div>
        )
    }
    else{
        return(
        <div>
            <img className={'Hangman'} src={require('./pics/Hangman 7.png')} alt={"hangman last state"}></img>
        </div>
        )
    }
}