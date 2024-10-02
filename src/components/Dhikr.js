import React, { useState } from 'react';
import '../styles/dhikr.css';
import Header from './Header';


export default function Zikirmatik() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const resetCount = () => {
        setCount(0);
    };

    return (
        <div className="App">
            <Header />
            <div className='container'>
                <h1 className='title'>Zikirmatik</h1>
                <div className='counter'>{count}</div>
                <button className='button' onClick={incrementCount}>
                    Çek
                </button>
                <button className='resetButton' onClick={resetCount}>
                    Sıfırla
                </button>
            </div>
        </div>

    );
}