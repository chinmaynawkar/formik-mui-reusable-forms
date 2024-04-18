import { useField } from "formik";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

interface FieldComponentProps {
  name: string;
  label: string;
  type?: string;
  variant?: "filled" | "outlined" | "standard";
  disabled?: boolean;
}

const FieldComponent = ({
  name,
  label,
  type = "text",
  variant = "outlined",
  disabled = false,
}: FieldComponentProps) => {
  const [field, meta, helpers] = useField(name);

  const renderInput = () => {
    switch (type) {
      case "date":
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Controlled picker"
              value={dayjs(field.value)}
              onChange={(value: dayjs.Dayjs | null) => helpers.setValue(value)}
              slots={{
                textField: ({ inputRef, inputProps, InputProps }) => (
                  <TextField
                    {...inputProps}
                    ref={inputRef}
                    label={label}
                    variant={variant}
                    disabled={disabled}
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error}
                    fullWidth
                    size="small"
                    InputProps={{ ...InputProps }}
                  />
                ),
              }}
            />
          </LocalizationProvider>
        );
      case "text":
      default:
        return (
          <TextField
            {...field}
            label={label}
            type={type}
            variant={variant}
            disabled={disabled}
            error={meta.touched && !!meta.error}
            helperText={meta.touched && meta.error}
            size="small"
            fullWidth
          />
        );
    }
  };

  return renderInput();
};

export default FieldComponent;
