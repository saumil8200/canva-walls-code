import { useState } from 'react';

/* eslint-disable react/prop-types */
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search..."
      className="w-full p-2 border border-gray-300 rounded"
    />
  );
};

export default SearchBar;
