// validators.js
export function validateUserForm(values) {
  const errors = {};

  if (!values.firstName || values.firstName.trim() === "") {
    errors.firstName = "First name is required";
  } else if (values.firstName.length > 100) {
    errors.firstName = "First name cannot exceed 100 characters";
  }

  if (!values.lastName || values.lastName.trim() === "") {
    errors.lastName = "Last name is required";
  } else if (values.lastName.length > 100) {
    errors.lastName = "Last name cannot exceed 100 characters";
  }

  if (!values.username || values.username.trim() === "") {
    errors.username = "Username is required";
  } else if (values.username.length > 100) {
    errors.username = "Username cannot exceed 100 characters";
  }

  if (!values.email || values.email.trim() === "") {
    errors.email = "Email is required";
  } else if (values.email.length > 100) {
    errors.email = "Email cannot exceed 100 characters";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password || values.password.trim() === "") {
    errors.password = "Password is required";
  } else if (values.password.length > 50) {
    errors.password = "Password cannot exceed 50 characters";
  }

  if (values.phone && values.phone.length > 20) {
    errors.phone = "Phone number cannot exceed 20 characters";
  }

  return errors;
}
