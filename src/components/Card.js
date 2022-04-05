import React from 'react';
import './Card.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Card = (props) => {
  const { name, image, gender, status } = props;
  return (
    <div className='card col-2'>
      <img className='card-img' src={image} alt={name} />
      <h3 class="card-title">{name}</h3>
      <p>Gender: {gender}</p>
      <p>Status: {status}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  );
};
