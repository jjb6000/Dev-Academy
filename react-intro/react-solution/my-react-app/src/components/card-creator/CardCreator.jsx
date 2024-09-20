import React, { useState } from 'react';
import './CardCreator.css';
import Button from '../button/button.jsx'


function CardCreator(props) {

    return (
        <>
        <form className="card-form" onSubmit={ props.submitCard }>
            <div className="form-section">
                <label htmlFor="textArea">Write Text</label>
                <textarea id="textArea" className="input-text" type="text" required></textarea>
            </div>
            <div className="form-section">
                <label htmlFor="colorSelect">Select color</label>
                <select name="colorSelect" id="colorSelect" required>
                    <option value="blue">blue</option>
                    <option value="beige">beige</option>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="lightgreen">lightgreen</option>
                </select>
            </div>
            <Button btnText="Create Card" />
        </form>
        </>
    )
}

export default CardCreator