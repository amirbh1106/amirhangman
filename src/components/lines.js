import React from 'react';

export function Lines(props){   
    if (props.letter !== ' ') {
        return <div className='img-cont'>
           
            <div className={'text-pos'}>{ props.show && props.letter }</div>
            <img className={'img-pos'} src={require('./pics/Rectangle.png')} alt={"normal"}></img>
        </div>
    } else {
      return <div className='space-cont'>
          
      </div>
      
    }
}
