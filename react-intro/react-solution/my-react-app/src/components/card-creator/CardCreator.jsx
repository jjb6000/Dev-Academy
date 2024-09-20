import React, { useState } from 'react';
import './CardCreator.css';


function CardCreator() {
    return (
        <div className="card-form-container">
        <form>
            <div className="form-section">
                <label for="textArea">Write Text</label>
                <textarea id="textArea" className="input-text" type="text" required></textarea>
            </div>
            <div className="form-section">
                <label for="colorSelect">Select color</label>
                <select name="colorSelect" id="colorSelect" required>
                    <option value="blue">blue</option>
                    <option value="beige">beige</option>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="lightgreen">lightgreen</option>
                </select>
            </div>
            <button type="submit">Create Card</button>
        </form>
    </div>
    )
}

export default CardCreator