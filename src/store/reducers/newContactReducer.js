const initState = {
  first_name: "",
  last_name: "",
  birth_date: null,
  gender: null,
  job: "",
  biography: "",
  is_active: false,
};

const newContactReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default newContactReducer;
