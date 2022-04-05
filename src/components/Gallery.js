import { waitForElementToBeRemoved } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { Card } from './Card';
const API_RICK_MORTY = 'https://rickandmortyapi.com/api/character';
//import './Card.scss';

export const Gallery = (props) => {

  const [characters, setCharacters] = useState([]);

  useEffect(()=>{

    async function getData(){
      const result = await fetch(API_RICK_MORTY);
      const data = await result.json()
      setCharacters(data.results);
    }

    getData()
    
  },[])


  const { title, url, description } = props;
  return (
    <div className='gallery-container'>
        {characters.map((elm, index) => (
          <Card
          key={index}
          name={elm.name}
          image={elm.image}
          gender={elm.gender}
          status={elm.status}
        ></Card>
        ))}
      </div>
  );
};

async function getData(){
  const result = await fetch(API_RICK_MORTY);
  const data = await result.json()
  
}
