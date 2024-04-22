import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
} from "@mui/material";
import { FieldProps, getIn } from "formik";
// getIn: A utility function from Formik used to access values
// from objects and arrays, which is especially useful for nested fields

export interface DropdownMenuItem {
  name?: string;
  label: string;
  value: string;
}

interface DropdownProps extends FieldProps {
  label: string;
  menuItems: DropdownMenuItem[];
  required?: boolean;
}

export default function FormikDropDown({
  field,
  form,
  label,
  menuItems,
}: DropdownProps) {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name)
      ? getIn(form.errors, field.name).toString()
      : "";

  return (
    <>
      {/* Separate label above the dropdown */}
      <Typography variant="subtitle1" gutterBottom>
        {label}
      </Typography>
      <FormControl fullWidth error={!!errorText}>
        <Select {...field} size="small">
          {menuItems.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        {errorText && <FormHelperText>{errorText}</FormHelperText>}
      </FormControl>
    </>
  );
}
