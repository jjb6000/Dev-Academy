import React, { useState } from "react";
import './Card.css'


function Card() {
    const [text, setText] = useState('Lorem ipsum');
    const [color, setColor] = useState('blue');

    return (
        <div className="module">
            <div className="module-img" style={{backgroundColor: {color} }}></div>
            <div className="module-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Card
