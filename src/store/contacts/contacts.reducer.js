const INITIAL_STATE = {
  contacts: [],
  isLoading: false,
  error: null
}

const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactsActionTypes.FETCH_CONTACTS_START:
    case ContactsActionTypes.ADD_CONTACT_START:
    case ContactsActionTypes.DELETE_CONTACT_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
      case ContactsActionTypes.FETCH_CONTACTS_FAILURE:
    case ContactsActionTypes.ADD_CONTACT_FAILURE:
    case ContactsActionTypes.DELETE_CONTACT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
      case ContactsActionTypes.FETCH_CONTACTS_SUCCESS:
        return {
         ...state,
          isLoading: false,
          error: null,
          contacts: action.payload
        }
    default:
      return state;
  }
};

export default contactsReducer;