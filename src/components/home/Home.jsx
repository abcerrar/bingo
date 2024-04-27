import React from 'react';
import './Home.scss';

export default function Home() {

    const [inputValue, setInputValue] = React.useState('')
    const input = <input type="text" placeholder='Codigo de partida' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

    const play = (e) => {
        // api call
        fetch('http://localhost:8080/api').then(res => res.json()).then(data => {
            console.log(data)
        })

    }
    const button_play = <p className='home_button' onClick={play}>Jugar</p>
    const button_create = <p className='home_button'>Crear partida</p>



    return (
        <div id="home">
            <div>
                {input}
                {button_play}
            </div>
            <p className='home_button'>Crear partida</p>
        </div>
    );
}