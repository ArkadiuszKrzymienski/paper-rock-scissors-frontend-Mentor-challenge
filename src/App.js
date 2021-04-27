import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './Footer'
import Header from './Header'
import StartGame from './StartGame'
import Result from './Result';

import './style/App.css';

function App() {
  const [playerChoose, setPlayerChoose] = useState('');
  const [botChoose, setBotChoose] = useState('');
  const [win, setWin] = useState('');
  const [counter, setCounter] = useState(0)

  return (
    <>  
      <Header/>
      <div className='game-container'>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path='/'> 
              <StartGame setPlayerChoose={setPlayerChoose} playerChoose={playerChoose} setCounter={setCounter} setWin={setWin} setBotChoose={setBotChoose}/>
            </Route>
            <Route path='/result'>
              <Result win={win} botChoose={botChoose} playerChoose={playerChoose}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <Footer/>
    </>
  );
}

export default App;
