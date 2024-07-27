import React from 'react';
import { Animal } from '../models/AnimalModel';

const AnimalListItem: React.FC<{ animal: Animal }> = ({ animal }) => {
  return (
    <li>
      <img src={animal.popfile} alt={animal.kindCd} />
      <p>{animal.kindCd}</p>
      <p>{animal.happenPlace}</p>
      <p>{animal.specialMark}</p>
    </li>
  );
};

export default AnimalListItem;
