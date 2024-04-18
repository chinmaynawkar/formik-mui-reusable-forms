import { Grid } from "@mui/material";

interface FormLayoutProps {
  children: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
};

export default FormLayout;
