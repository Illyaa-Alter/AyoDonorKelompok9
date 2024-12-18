import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

// Menggunakan composeWithDevTools untuk mempermudah pengaturan redux devtools di development
const store = createStore(
  rootReducer, // Reducer utama dari aplikasi
  initialState, // State awal
  composeWithDevTools(applyMiddleware(...middleware)) // Mengaplikasikan middleware dengan redux-devtools
);

export default store;
