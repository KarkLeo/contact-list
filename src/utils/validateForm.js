export default (fields) => {
  let hasError = false;
  let isNotAllOriginal = false;

  fields.forEach((i) => {
    hasError = hasError || i.isError;
    isNotAllOriginal = isNotAllOriginal || i.value !== i.startValue;
  });

  return hasError || !isNotAllOriginal;
};
