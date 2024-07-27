// src/components/SearchBar.tsx
import React, { useState } from 'react';

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};

const SearchBar: React.FC<{
  onSearch: (startDate: string, endDate: string) => void;
}> = ({ onSearch }) => {
  const [startDate, setStartDate] = useState(
    formatDate(new Date(new Date().setDate(new Date().getDate() - 7))),
  );
  const [endDate, setEndDate] = useState(formatDate(new Date()));

  const handleSearch = () => {
    onSearch(startDate, endDate);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="YYYYMMDD"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="YYYYMMDD"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
