import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom'; 

const title = 'Click on a photo to get a fun fact about the animal';
const showBackground = false;
const background = (
  <img 
  className = 'background'
  alt= 'ocean'
  src= '/images/ocean.jpg'
  />);
  
  const images = [];

  for(const animal in animals){
    images.push(
      <img
        key={animal}
        className='animal'
        alt= {animal}
        src= {animals[animal].image}
        ariaLabel= {animal}
        role= 'button'
        onClick = {displayFact}
      />
    )
  }
  function displayFact(e){
    const selectedAnimal = e.target.alt;
    const animalInfo = animals[selectedAnimal];
    const animalIndex = Math.floor(Math.random() * animalInfo.facts.length);

    const funFact = animalInfo.facts[animalIndex];
    document.getElementById('fact').innerHTML = funFact;
  }
const animalFacts =(
  <div>
  {showBackground && background}
  <p id='fact'></p>
  <div className = 'animals'>
  {images}
  </div>
  <h1>{title || 'Click an animal '}</h1>
  </div>) 
  
ReactDOM.render(animalFacts, document.getElementById('root'));
