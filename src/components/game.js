import React from 'react'
import {Lines} from './lines';

export function Game(props){
    
    return(
    <div className={'center'}>
    <h1 className={'centerimg'}>{""}</h1> 
    {props.Game.map(ch => 
        <Lines 
            letter={ch} 
            show={props.guesses.includes(ch.toLowerCase())}            
        />)}
       </div>) 
}