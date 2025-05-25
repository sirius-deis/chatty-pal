import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import chatReducer from "./chat/chat.reducer";
import contactsReducer from "./contacts/contacts.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  contacts: contactsReducer
});

export default rootReducer;
