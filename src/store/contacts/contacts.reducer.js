const INITIAL_STATE = {
  contacts: [],
  isLoading: false,
  error: null
}

const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default contactsReducer;