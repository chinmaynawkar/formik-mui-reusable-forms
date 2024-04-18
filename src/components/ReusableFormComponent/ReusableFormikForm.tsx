import { Formik, Form } from "formik";
import { Button, Grid } from "@mui/material";
import FieldComponent from "./FieldComponent";
import { formValidationSchema } from "./types/FormSchema";
import FormLayout from "./FormLayout";
import FormValues from "./types/FormValues";

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
}
interface ReusableFormikFormProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
}

const ReusableFormikForm: React.FC<ReusableFormikFormProps> = ({
  initialValues,
  onSubmit,
}) => {
  const formFields: FormFieldProps[] = [
    { name: "invoiceNumber", label: "Invoice Number", type: "text" },
    { name: "product", label: "Product", type: "text" },
    { name: "quantity", label: "Quantity", type: "number" },
    { name: "equivalentCredit", label: "Equivalent Credit", type: "number" },
    { name: "typeofCredit", label: "Type of Credit", type: "text" },
    { name: "partnerName", label: "Partner Name", type: "text" },
    {
      name: "shippingSiteAddress",
      label: "Shipping Site Address",
      type: "text",
    },
    {
      name: "deliverySiteAddress",
      label: "Delivery Site Address",
      type: "text",
    },
    { name: "shippingDate", label: "Shipping Date", type: "date" },
    { name: "deliveryDate", label: "Delivery Date", type: "date" },
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <FormLayout>
            <Grid container spacing={2}>
              {formFields.map((formField) => (
                <Grid item xs={12} sm={6} key={formField.name}>
                  <FieldComponent
                    name={formField.name}
                    label={formField.label}
                    type={formField.type}
                  />
                </Grid>
              ))}
            </Grid>
          </FormLayout>
          <Grid container spacing={2} justifyContent="center" mt={2}>
            <Grid item>
              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </Grid>
            <Grid item>
              <Button type="reset" variant="outlined">
                Reset
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default ReusableFormikForm;
