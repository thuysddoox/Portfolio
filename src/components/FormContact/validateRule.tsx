export default function validate(data: {
  email: string;
  name: string;
  message: string;
}) {
  const errors: any = {};

  if (data.email.length === 0 || !data.email) {
    errors.email = "Please enter your email."
  }
  else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email address is invalid.';
  }

  if (data.name.length === 0 || !data.name) {
    errors.name = "Please enter your name."
  }
  else if (/[0-9]+/.test(data.name)) {
    errors.name = 'Name cannot contain numbers.';
  }

  if (data.message.length === 0 || !data.message) {
    errors.message = 'Please enter your message.';
  }

  return errors;
}