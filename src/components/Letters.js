import React from 'react'

export function Letters(props) {
    return(
        <div className={'centergame'}> 
            {'abcdefghijklmnopqrstuvwxyz'.split('').map(c => 
                <img className={props.guesses.includes(c) && 'selected'} src={require(`./pics/letters/on/${c}.png`)} onClick={() => props.letterclicked(c)} key={c} alt={c}></img>)}
        </div>
    )

}