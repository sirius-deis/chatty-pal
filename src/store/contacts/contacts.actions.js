import fetchData from "../../utils/fetchData"

export const fetchContacts = () => async (dispatch) => {
  dispatch({ type: ContactsActionTypes.FETCH_CONTACTS_START });
  try {
    const data = await fetchData("contacts");
    dispatch({ type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS, payload: data });
  } catch(error) {
    dispatch({ type: ContactsActionTypes.FETCH_CONTACTS_FAILURE, payload: error });
  }
}

export const addContact = (contact) => async (dispatch) => {
  dispatch({ type: ContactsActionTypes.ADD_CONTACT_START });
  try {
    const data = await fetchData("contacts", {
      method: "POST",
      body: JSON.stringify(contact),
    });
    dispatch({ type: ContactsActionTypes.ADD_CONTACT_SUCCESS, payload: data });
  } catch(error) {
    dispatch({ type: ContactsActionTypes.ADD_CONTACT_FAILURE, payload: error });
  }
}

export const deleteContact = (contactId) => async (dispatch) => {
  dispatch({ type: ContactsActionTypes.DELETE_CONTACT_START });
  try {
    await fetchData(`contacts/${contactId}`, { method: "DELETE" });
    dispatch({ type: ContactsActionTypes.DELETE_CONTACT_SUCCESS, payload: contactId });
  } catch(error) {
    dispatch({ type: ContactsActionTypes.DELETE_CONTACT_FAILURE, payload: error });
  }
}