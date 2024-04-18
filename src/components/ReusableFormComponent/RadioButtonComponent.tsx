import { useField } from "formik";
import {
  FormControl,
  FormControlLabel,
  FormControlProps,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export interface RadioButtonComponentProps {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  formControlProps?: FormControlProps;
}

const RadioButtonsGroup: React.FC<RadioButtonComponentProps> = ({
  name,
  label,
  options,
  formControlProps,
}) => {
  const [field, , helpers] = useField(name);

  return (
    <FormControl {...formControlProps}>
      <FormLabel id={`${name}-label`}>{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby={`${name}-label`}
        {...field}
        onChange={(event) => helpers.setValue(event.target.value)}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio disabled={option.disabled} />}
            label={option.label}
            disabled={option.disabled}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioButtonsGroup;
