import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface SelectGradesInterface {
  name: string;
  value: any;
  errorMessage: string;
  onChange: any;
}

const SelectGrades = ({ name, value, errorMessage, onChange }: SelectGradesInterface) => {
  
  const handleChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, color: 'black' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Masukkan Nilai</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id={name}
          name={name}
          value={value}
          label="Nilai"
          onChange={handleChange}
        >
            {
                [...Array(10)].map((item, idx) => {
                    return <MenuItem value={idx+1} key={idx}>{idx+1}</MenuItem>
                })
            }
        </Select>
      </FormControl>
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
    </Box>
  );
}

export default SelectGrades;