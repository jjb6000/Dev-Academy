import React, { useState, useEffect } from 'react';
import Button from '../button/button.jsx'
import './Counter.css';

function Counter() {
    
    //  [ var    Methode]     hook(default)
    let [count, setCount] = useState(0);
    // Mehtode kann selbst benannt werden, aber set+Variablenname ist üblich

    const counter = () => setCount(count + 1);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

   
    return (
        <>
            <Button clickFunction={counter} btnText="Count" />
            <div>
                <h2>Count: { count }</h2>
            </div>
        </>
    )
}

export default Counter