export default (field, config) => {
  if (config.required && (field?.value === null || field?.value.length === 0))
    return {
      ...field,
      isError: true,
      errorMessage: "Поле обязательное к заполнению",
    };
  if (config.maxLength && field?.value.length > config.maxLength)
    return {
      ...field,
      isError: true,
      errorMessage: `Максимальная допустимая длина ${config.maxLength} символов`,
    };
  return {
    ...field,
    isError: false,
    errorMessage: "",
  };
};
