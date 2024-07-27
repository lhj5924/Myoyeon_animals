// src/views/AnimalListView.tsx
import React from 'react';
import useAnimalViewModel from '../viewmodels/AnimalListView';
import AnimalList from '../components/AnimalList';
import SearchBar from '../components/SearchBar';

const AnimalListView: React.FC = () => {
  const { animals, loading, searchAnimals } = useAnimalViewModel();

  return (
    <div>
      <SearchBar onSearch={searchAnimals} />
      {loading ? <p>Loading...</p> : <AnimalList animals={animals} />}
    </div>
  );
};

export default AnimalListView;
