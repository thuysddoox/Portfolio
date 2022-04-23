import { useState, useEffect } from 'react';

interface Data {
  email: string;
  name: string;
  attachments?: any;
  message: string;
}
const useForm = (
  callback: Function,
  validate: Function,
) => {
  const [values, setValues] = useState<Data>({
    email: '',
    message: '',
    name: '',
    attachments: {},
  });
  const [errors, setErrors] = useState<any>({
    email: '',
    message: '',
    name: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting && isClick) {
      callback(values);
      setIsSubmitting(false);
    }
    setIsClick(false);
  }, [errors]);

  useEffect(() => {
    if (isSubmitting) setErrors(validate(values));
  }, [values]);

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    setIsClick(true);
    // console.log(errors);
  };

  const handleChange = (event: any) => {
    event.persist();
    if (event.target.files) {
      setValues((prev) => ({
        ...prev,
        [event.target.name]: event.target.files[0],
      }));
    } else
      setValues((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
  };
  const clearForm = () => {
    setValues({
      email: '',
      message: '',
      name: '',
    });
  };
  return {
    handleChange,
    handleSubmit,
    clearForm,
    values,
    errors,
  };
};

export default useForm;
