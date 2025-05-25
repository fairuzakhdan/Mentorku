import { useState } from 'react';
const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };
  return [value, handleChangeValue];
};

export default useInput;
