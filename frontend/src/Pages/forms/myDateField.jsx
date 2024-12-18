import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";

export default function MyDateField(props) {
  const { label, control, name, width } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error }, // Mendapatkan error dari fieldState
        }) => (
          <DatePicker
            label={label} // Menggunakan label dari props
            sx={{ width }} // Memperbaiki penulisan width
            onChange={onChange}
            value={value}
            slotProps={{
              textField: {
                error: !!error, // Menampilkan error jika ada
                helperText: error?.message, // Menampilkan pesan error
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
