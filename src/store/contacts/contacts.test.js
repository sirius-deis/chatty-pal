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

  it('should handle FETCH_CONTACTS_SUCCESS', () => {
    const contacts = [{ _id: 1, name: 'John' }, { _id: 2, name: 'Alice' }];
    const action = { type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS, payload: { contacts } }
    const result = contactsReducer(
      { isLoading: true, error: null, contacts: [] },
      action
    )
    expect(result.isLoading).toEqual(false)
    expect(result.error).toEqual(null)
    expect(result.contacts).toEqual(contacts)
  })
  it('should handle ADD_CONTACTS_SUCCESS', () => {
    const contact = { _id: 3, name: 'Bob' };
    const action = { type: ContactsActionTypes.ADD_CONTACT_SUCCESS, payload: { contact } }
    const result = contactsReducer(
      { isLoading: true, error: null, contacts: [] },
      action
    )
    expect(result.isLoading).toEqual(false)
    expect(result.error).toEqual(null)
    expect(result.contacts).toEqual([contact])
  })
  it('should handle DELETE_CONTACTS_SUCCESS', () => {
    const contactId = 2;
    const action = { type: ContactsActionTypes.DELETE_CONTACT_SUCCESS, payload: { contactId } }
    const result = contactsReducer(
      { isLoading: true, error: null, contacts: [{ _id: 1, name: 'John' }, { _id: 2, name: 'Alice' }] },
      action
    )
    expect(result.isLoading).toEqual(false)
    expect(result.error).toEqual(null)
    expect(result.contacts).toEqual([{ _id: 1, name: 'John' }])
  })
})