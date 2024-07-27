// src/viewmodels/AnimalViewModel.ts
import { useEffect, useState } from 'react';
import { fetchAnimals } from '../services/ApiService';
import { Animal } from '../models/AnimalModel';

const useAnimalViewModel = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(false);

  const searchAnimals = async (startDate: string, endDate: string) => {
    setLoading(true);
    const result = await fetchAnimals({
      bgnde: startDate,
      endde: endDate,
      numOfRows: 10,
      pageNo: 1,
    });
    setAnimals(result);
    setLoading(false);
  };

  return {
    animals,
    loading,
    searchAnimals,
  };
};

export default useAnimalViewModel;
