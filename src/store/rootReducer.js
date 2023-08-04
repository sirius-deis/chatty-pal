import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import chatReducer from './chat/chat.reducer';
import messageReducer from './message/message.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  message: messageReducer,
});

export default rootReducer;
