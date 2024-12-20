import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';

export default function MySelectField(props) {
  const { label, placeholder, name, control, width, options } = props;
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <FormControl variant="standard" sx={{ width: { width } }}>
          <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>

          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            onChange={onChange}
            value={value}
            error={!!error}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Select>

          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}
