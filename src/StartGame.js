import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'

const options = ['rock', 'paper', 'scissors'];
let counter = 0

const StartGame = ({setPlayerChoose,setCounter, setWin , setBotChoose}) => {
    const handleClick = (e) => {
        const playerChoose = e.target.dataset.id;
        setPlayerChoose(playerChoose)
        const botChoose = options[Math.floor(Math.random()*3)];
        setBotChoose(botChoose)
        console.log(playerChoose, botChoose, counter)
        if(playerChoose === 'rock' && botChoose === 'paper'){
            --counter
            setCounter(counter);
            setWin('Lose');
        } else if (playerChoose === 'rock' && botChoose === 'scissors'){
            ++counter;
            setCounter(counter);
            setWin('Win');
        } else if (playerChoose === 'paper' && botChoose === 'scissors'){
            --counter;
            setCounter(counter);
            setWin('Lose');
        } else if (playerChoose === 'paper' && botChoose === 'rock'){
            ++counter;
            setCounter(counter);
            setWin('Win');
        } else if (playerChoose === 'scissors' && botChoose === 'rock'){
            --counter;
            setCounter(counter);
            setWin('Lose');
        } else if (playerChoose === 'scissors' && botChoose === 'paper'){
            ++counter;
            setCounter(counter);
            setWin('Win');
        } else {
            setWin('Draw');
        }
    }

    useEffect(() => {
        document.querySelector('.score').innerHTML = counter
    },[])

    return ( 
        <div className='start-container'>  
            <Link to='/result' data-id='paper' className='option paper' onClick={handleClick}/>
            <Link to='/result' data-id='scissors' className='option scissors' onClick={handleClick}/>
            <Link to='/result' data-id='rock' className='option rock'onClick={handleClick}/>
        </div>
     );
}
 
export default React.memo(StartGame);