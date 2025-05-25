const useInput = (initialValue, onChange) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return [value, setValue, onChange];
};
