import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/card/Card.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import CardCreator from './components/card-creator/CardCreator.jsx';
import Counter from './components/counter/Counter.jsx';



function App() {

  const [cards, setCards] = useState([
    { text: "Das ist eine Text für eine Karte", color: "blue" },
    { text: "Das ist ein neuer Text", color: "green" },
    { text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, libero nostrum veritatis quos architecto iure molestias.", color: "yellow" }
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    const newText = document.getElementById('textArea').value;
    const newColor = document.getElementById('colorSelect').value;
    setCards([...cards, { text: newText, color: newColor }]);
    resetForm();
  }

  function resetForm() {
    document.getElementById('textArea').value = '';
    document.getElementById('colorSelect').value = '';
  }

  return (
    <>
      <Navbar />

      <div className="standard-container">
        <CardCreator submitCard={handleSubmit} />
      </div>

      <div id='cardsContainer' className="module-container">
        {cards.map((card, index) => (
          <Card key={index} text={card.text} color={card.color} />
        ))}
      </div>

      <div className="standard-container">
        <Counter />
      </div>

    </>
  )
}

export default App


