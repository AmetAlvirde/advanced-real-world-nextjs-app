import { useState, useEffect } from 'react';
import validate from './loginValidationRules';

const useForm = (callback, initialFormFields = {}) => {
  const [values, setValues] = useState(initialFormFields);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = event => {
    event.persist();
    setValues(FormValues => ({
      ...FormValues,
      [event.target.name]: event.target.value
    }));
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
