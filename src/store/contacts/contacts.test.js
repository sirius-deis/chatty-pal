import contactsReducer from "./contacts.reducer";
import ContactsActionTypes from './contacts.actions'

describe("contactsReducer", () => {
  it('should handle FETCH_CONTACTS_START', () => {
    const action = { type: ContactsActionTypes.FETCH_CONTACTS_START }
    const result = contactsReducer(
      { isLoading: false, error: null, contacts: [] },
      action
    )
    expect(result.isLoading).toEqual(true)
    expect(result.error).toEqual(null)
  })
  it('should handle ADD_CONTACT_START', () => {
    const action = { type: ContactsActionTypes.ADD_CONTACT_START }
    const result = contactsReducer(
      { isLoading: false, error: null, contacts: [] },
      action
    )
    expect(result.isLoading).toEqual(true)
    expect(result.error).toEqual(null)
  })
  it('should handle DELETE_CONTACT_START', () => {
    const action = { type: ContactsActionTypes.DELETE_CONTACT_START }
    const result = contactsReducer(
      { isLoading: false, error: null, contacts: [] },
      action
    )
    expect(result.isLoading).toEqual(true)
    expect(result.error).toEqual(null)
  })
})