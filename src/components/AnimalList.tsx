import React from 'react';
import AnimalListItem from './AnimalListItem';
import { Animal } from '../models/AnimalModel';

const AnimalList: React.FC<{ animals: Animal[] }> = ({ animals }) => {
  return (
    <ul>
      {animals.map((animal) => (
        <AnimalListItem key={animal.desertionNo} animal={animal} />
      ))}
    </ul>
  );
};

export default AnimalList;
