import React, { useState } from 'react';
import { TextField, Autocomplete, Button } from '@mui/material';
import axios from 'axios';

const SearchRooms = ({ onSearch }) => {
  const [filter, setFilter] = useState({ type: '', availability: '', floor: '' });

  const handleSearch = async () => {
    const response = await axios.get('/api/rooms', { params: filter });
    onSearch(response.data); // Pass filtered rooms to parent component
  };

  return (
    <div>
      <Autocomplete
        options={['Single', 'Double', 'Shared']}
        renderInput={(params) => <TextField {...params} label="Room Type" />}
        onChange={(e, value) => setFilter({ ...filter, type: value })}
      />
      <TextField
        label="Floor"
        type="number"
        value={filter.floor}
        onChange={(e) => setFilter({ ...filter, floor: e.target.value })}
      />
      <Autocomplete
        options={[true, false]}
        renderInput={(params) => <TextField {...params} label="Availability" />}
        onChange={(e, value) => setFilter({ ...filter, availability: value })}
      />
      <Button onClick={handleSearch} variant="contained">Search</Button>
    </div>
  );
};

export default SearchRooms;
