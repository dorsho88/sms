import React from 'react';


// export to module
const today = new Date();


const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date + ' ' + time;

const form = {
  number: '',
  message: '',
};

const useForm = (callback) => {
  const [values, setValues] = React.useState(form);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);
    setValues(form);
  };

  const handleChange = (event) => {
    event.persist();
    const { name } = event.target;
    let { value } = event.target;
    setValues(values => ({ ...values, [event.target.name]: value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
