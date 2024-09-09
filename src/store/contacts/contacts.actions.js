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