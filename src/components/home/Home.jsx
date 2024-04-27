import React from 'react';
import './Home.scss';

export default function Home() {
    const play = (e) => {
        // api call
        
    }

    const button_play = <p className='home_button' onClick={play}>Jugar</p>
    const button_create = <p className='home_button'>Crear partida</p>

    

    return (
        <div id="home">
            <div>
                <input type="text" placeholder='Codigo de partida' />
                {button_play}
            </div>
            <p className='home_button'>Crear partida</p>
        </div>
    );
}