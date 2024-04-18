import * as Yup from 'yup';

// Helper validation functions
const requiredString = (fieldName: string) =>
  Yup.string().required(`${fieldName} is required`);

const maxLengthString = (maxLength: number) =>
  Yup.string().max(maxLength, `Max length is ${maxLength} characters`);

const positiveInteger = (fieldName: string) =>
  Yup.number().required(`${fieldName} is required`).positive().integer();

const matchRegex = (regex: RegExp, message: string) =>
  Yup.string().matches(regex, message);

// Schema for Email
const email = Yup.string()
  .email('Invalid email format')
  .required('Email is required');

// Schema for Phone Number
const phoneNumber = Yup.string()
  .matches(/^[6-9]\d{9}$/, 'Invalid phone number')
  .required('Phone number is required');

// Schema for Address
const address = Yup.object().shape({
  addressLine1: requiredString('Address Line 1'),
  addressLine2: maxLengthString(100),
  city: requiredString('City'),
  state: requiredString('State'),
  postalCode: requiredString('Postal Code'),
  country: requiredString('Country')
});

// Single exported object
export const ValidationSchema = {
  email,
  phoneNumber,
  address,
  requiredString,
  maxLengthString,
  positiveInteger,
  matchRegex
};
