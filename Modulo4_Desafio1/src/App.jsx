import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';

const dogs = [
  { name: "Luna", breed: "Labrador Retriever", description: "Cachorro, pelaje café" },
  { name: "Max", breed: "Labrador", description: "Cachorro, pelaje blanco" },
  { name: "Buddy", breed: "Pastor Alemán", description: "Cachorro, pelaje negro y marrón" },
  { name: "Unknown", breed: "Unknown", description: "De este no estamos seguros" }
];

function App() {
  return (
    <div className="App">
      <Header title="Adopta un perrito" />
      <div className="card-container">
        {dogs.map((dog) => (
          <Card key={dog.name} name={dog.name} breed={dog.breed} description={dog.description} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
