export default function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.noUsername = 'El usuario es un campo obligatorio';
  }
  if (!values.password) {
    errors.noPassword = 'La contraseña es un campo obligatorio';
  }
  return errors;
}
