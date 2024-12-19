import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export default function MyMultilineFields(props) {
  const { label, placeholder, width, name, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ 
        field: { onChange, value }, 
        fieldState: { error }, 
        formState 
      }) => (
        <TextField
          sx={{ width }}
          id="standard-multiline-static"
          label={label}
          multiline
          rows={1}
          onChange={onChange}
          value={value}
          
          placeholder={placeholder}
          variant="standard"
          error = {!!error}
          helperText = {error?.message}
        />
      )}
    />
  );
}
