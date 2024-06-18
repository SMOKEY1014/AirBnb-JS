import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Importing the entire 'redux-thunk' package
import { composeWithDevTools } from 'redux-devtools-extension';
import { listingListReducer } from './Reducers/listingReducer';
import { modalReducer } from './Reducers/ModalReducer'
import { userLoginReducer } from './Reducers/userReducer';

const reducer = combineReducers({
  listingList: listingListReducer,
  modal: modalReducer,
  userLogin: userLoginReducer
});

const userInfoFromLS = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("UserInfo")) : null; 

const initialState = {
  userLogin: {userInfo: userInfoFromLS},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
