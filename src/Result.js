import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
// import React from 'react';
// import paper from './img/icon-paper.svg'
// import scissors from './img/icon-scissors.svg'
// import rock from './img/icon-rock.svg'


const Result = ({playerChoose , botChoose, win}) => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.hide').classList = botChoose + ` ${win === 'Lose' ? 'win' : null}`;
            document.querySelector('.result-container h3').style.color = 'white';
            document.querySelector('.result-container a').style.backgroundColor = 'white';
            document.querySelector('.result-container a').style.color= 'hsl(237, 49%, 15%)';
            document.querySelector('.playerChoose').classList = playerChoose + ` ${win === 'Win' ? 'win' : null}`;
        },2000)
    },[])

    return (
        <div className='result-container'>
                <div className='circles'>
                    <div className='circle'>
                        <div className={`playerChoose ${playerChoose}`}></div>
                        <p>You picked</p>
                    </div>
                    <div className='circle'>
                        <div className='hide'></div>
                        <p>The house picked</p>
                    </div>
                </div>
            <h3 style={{color: 'transparent'}}>{win === 'Lose' || win === 'Win' ? `You ${win}` : 'Draw'}</h3>
            <Link to='/' className='again' style={{backgroundColor: 'transparent', color: 'transparent'}}>Play again</Link>
        </div>
    );
}

export default Result;