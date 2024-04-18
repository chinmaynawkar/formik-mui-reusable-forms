
import * as Yup from 'yup';
import { ValidationSchema } from '../common/CommonValidations';

export const formValidationSchema = Yup.object().shape({
    invoiceNumber: ValidationSchema.requiredString('Invoice Number'),
    product: ValidationSchema.requiredString('Product').concat(ValidationSchema.maxLengthString(255)),
    quantity: ValidationSchema.positiveInteger('Quantity'),
    equivalentCredit: ValidationSchema.positiveInteger('Equivalent Credit'),
    typeofCredit: ValidationSchema.requiredString('Type of Credit'),
    partnerName: ValidationSchema.requiredString('Partner Name')
                 .concat(ValidationSchema.maxLengthString(255))
                 .concat(ValidationSchema.matchRegex(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field")),
    shippingSiteAddress: ValidationSchema.requiredString('Shipping Site Address'),
    deliverySiteAddress: ValidationSchema.requiredString('Delivery Site Address'),
    shippingDate: ValidationSchema.requiredString('Shipping Date'),
    deliveryDate: ValidationSchema.requiredString('Delivery Date'),
});
