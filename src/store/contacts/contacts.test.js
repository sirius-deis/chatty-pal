import contactsReducer from "./contacts.reducer";
import ContactsActionTypes from './contacts.types'

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

  it('should handle FETCH_CONTACTS_FAILURE', () => {
    const error = new Error('Error fetching contacts');
    const action = { type: ContactsActionTypes.FETCH_CONTACTS_FAILURE, payload: error }
    const result = contactsReducer(
      { isLoading: true, error: null, contacts: [] },
      action
    )
    expect(result.isLoading).toEqual(false)
    expect(result.error).toEqual(error)
  })
  it('should handle ADD_CONTACT_FAILURE', () => {
    const error = new Error('Error adding contacts');
    const action = { type: ContactsActionTypes.ADD_CONTACT_FAILURE, payload: error }
    const result = contactsReducer(
      { isLoading: true, error: null, contacts: [] },
      action
    )
    expect(result.isLoading).toEqual(false)
    expect(result.error).toEqual(error)
  })
  it('should handle DELETE_CONTACT_FAILURE', () => {
    const error = new Error('Error adding contacts');
    const action = { type: ContactsActionTypes.DELETE_CONTACT_FAILURE, payload: error }
    const result = contactsReducer(
      { isLoading: true, error: null, contacts: [] },
      action
    )
    expect(result.isLoading).toEqual(false)
    expect(result.error).toEqual(error)
  })
})