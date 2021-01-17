export default (fields) => {
  let data = {};
  fields.forEach((i) => {
    data[i.name] = i.value;
  });

  return data;
};
