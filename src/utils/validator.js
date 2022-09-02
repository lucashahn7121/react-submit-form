import validator from "validator";

const isPhoneNumber = str => {
  const phoneRegEx = /^(\+1|1)?\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;
  if (phoneRegEx.test(str)) return true;
  return false;
}

export const checkFormValues = ({ email, phone, firstName, lastName }) => {
  const result = {
    isError: false, 
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
  }
  if (!email) {
    result.isError = true;
    result.email = 'This field is required!';
  } else if (!validator.isEmail(email)) {
    result.isError = true;
    result.email = 'Invalid Email!';
  }
  if (!phone) {
    result.isError = true;
    result.phone = 'This field is required!';
  } else if (!isPhoneNumber(phone)) {
    result.isError = true;
    result.phone = 'Invalid Phone Number!';
  }
  if (!firstName) {
    result.isError = true;
    result.firstName = 'This field is required!';
  } else if (!/^\w+$/.test(firstName)) {
    result.isError = true;
    result.firstName = 'Invalid First Name!';
  }
  if (!lastName) {
    result.isError = true;
    result.lastName = 'This field is required!';
  } else if (!/^\w+$/.test(lastName)) {
    result.isError = true;
    result.lastName = 'Invalid Last Name!';
  }
  return result;
}