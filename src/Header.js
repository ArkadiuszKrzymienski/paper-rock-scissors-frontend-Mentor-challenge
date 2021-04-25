import React from 'react';

const Header = () =>{
    return ( 
        <>  
            <header className='top-panel'>
                <h1>
                    <span>Rock</span>
                    <span>Paper</span>
                    <span>Scissors</span>
                </h1>
                <div className="result-panel">
                    <p>Score</p>
                    <h2 className='score'>0</h2>
                </div>
            </header>
        </>
     );
}
 
export default Header;