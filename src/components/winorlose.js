import React from 'react'

 export function WinOrLose(props){
     if(props.end === 1){
     console.log(props.failed)
     if(props.failed <= 5){
    return(
        <div className={'win-pos'}>
            <img src={require('./pics/yes_symbol.png')} alt={"yes"} ></img>
            <h1>you are the champion</h1>
        </div>
    )}
    else{
    return(
        <div className={'win-pos'}>
            <img src={require('./pics/shit_symbol.png')} alt={"shit"}></img>
            <h1>shit you messed up</h1>
        </div>
    )
    }
}else{
    return(
        <div>
        <h1>{""}</h1>
        </div>
    )
}

}