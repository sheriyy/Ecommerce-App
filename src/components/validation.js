const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateForm = (formValues) => {
  const errors = {};
  let isValid = true;
  if (!formValues.email) {
    errors.email = "Email is mandatory!";
    isValid = false;
  } else if (
    formValues.hasOwnProperty("email") &&
    !regex.test(formValues.email)
  ) {
    errors.email = "Invalid Email Format!";
    isValid = false;
  }
  if (formValues.hasOwnProperty("name") && !formValues.name) {
    errors.name = "Name is mandatory!";
    isValid = false;
  }
  if (formValues.hasOwnProperty("address") && !formValues.address) {
    errors.address = "Address is mandatory!";
    isValid = false;
  }
  if (formValues.hasOwnProperty("contactNo") && !formValues.contactNo) {
    errors.contactNo = "Contact No.is mandatory!";
    isValid = false;
  } else if (
    formValues.hasOwnProperty("contactNo") &&
    (formValues.contactNo.length < 10 || formValues.contactNo.length > 12)
  ) {
    errors.contactNo = "Contact No. must be in between 10 to 12 characters!";
    isValid = false;
  }
  if (formValues.hasOwnProperty("department") && !formValues.department) {
    errors.department = "Department is mandatory";
    isValid = false;
  }
  if (formValues.hasOwnProperty("password") && !formValues.password) {
    errors.password = "Password is mandatory!";
    isValid = false;
  } else if (
    formValues.hasOwnProperty("password") &&
    (formValues.password.length < 4 || formValues.password.length > 10)
  ) {
    errors.password = "Password must be in between 4 to 10 characters!";
    isValid = false;
  }
  if (
    formValues.hasOwnProperty("confirmPassword") &&
    !formValues.confirmPassword
  ) {
    errors.confirmPassword = "Confirm Password is mandatory!";
    isValid = false;
  } else if (
    formValues.hasOwnProperty("confirmPassword") &&
    formValues.password !== formValues.confirmPassword
  ) {
    errors.confirmPassword = "Password must match!";
    isValid = false;
  }
  return { errors, isValid };
};

export { validateForm };
