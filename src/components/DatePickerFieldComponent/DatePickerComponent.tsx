// import React from 'react';
// import { useField, useFormikContext } from 'formik';
// import TextField from '@mui/material/TextField';



// interface DatePickerFieldComponentProps {
//   name: string;
//   label: string;
// }

// interface RenderInputProps {
//   error: boolean;
//   helperText: string;
//   fullWidth: boolean;
// }

// const DatePickerFieldComponent: React.FC<DatePickerFieldComponentProps> = ({ name, label }) => {
//   const { setFieldValue } = useFormikContext();
//   const [field, meta] = useField(name);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DatePicker
//         label={label}
//         inputFormat="DD-MM-YYYY"
//         value={field.value || null}
//         onChange={(value: Date | null) => setFieldValue(name, value)}
//         renderInput={(params: RenderInputProps) => (
//           <TextField
//             {...params}
//             error={meta.touched && Boolean(meta.error)}
//             helperText={meta.touched && meta.error}
//             fullWidth
//           />
//         )}
//       />
//     </LocalizationProvider>
//   );
// };

// export default DatePickerFieldComponent;
