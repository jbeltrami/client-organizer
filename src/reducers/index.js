import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import clientReducer from './clientReducer';
import serviceReducer from './serviceReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  clients: clientReducer,
  service: serviceReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
