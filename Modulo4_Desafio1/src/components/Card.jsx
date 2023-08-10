import React from 'react';
import Tags from './Tags';

function Card({ name, breed, description }) {
  return (
    <div className="card">
      <img src={`/images/${name.toLowerCase()}.jpg`} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">Adoptar</button>
        <Tags text={breed} color="success" />
      </div>
    </div>
  );
}

export default Card;
