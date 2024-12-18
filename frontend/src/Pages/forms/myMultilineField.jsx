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
          sx={{ width }} // Corrected, use width directly without wrapping in an object
          id="standard-multiline-static"
          label={label}
          multiline
          rows={1} // Changed to 4 rows for better visibility of multiline input
          onChange={onChange} // Use the onChange handler from react-hook-form
          value={value} // Ensure value is controlled by react-hook-form (remove defaultValue)
          // Removed defaultValue="Default Value" to avoid conflicting with the controlled input
          placeholder={placeholder}
          variant="standard"
          error = {!!error}
          helperText = {error?.message}
        />
      )}
    />
  );
}
