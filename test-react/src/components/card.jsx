import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    state = {  } 
    render() { 
        return <div className="module">
            <div className="module-img"></div>
            <div className="module-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reiciendis, distinctio perspiciatis dolore tempore accusamus, dolores est minima dignissimos.</p>
        </div>
    </div>;
    }
}
 
export default Card;