import React from "react";
import ReusableFormikForm from "./ReusableFormikForm";
import FormValues from "./types/FormValues";

const initialFormValues: FormValues = {
  invoiceNumber: "",
  product: "",
  quantity: 0,
  equivalentCredit: 0,
  typeofCredit: "",
  partnerName: "",
  shippingSiteAddress: "",
  deliverySiteAddress: "",
  shippingDate: new Date(),
  deliveryDate: new Date(),
};

const MainForm: React.FC = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <>
      <ReusableFormikForm
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default MainForm;
