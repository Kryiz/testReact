import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import aboutPageReducer from './aboutPageReducer';
import HeaderReducer from './HeaderReducer';
import chatPageReducer from './chatPageReducer';
import testPageReducer from './testPageReducer';
import contactPageReducer from './contactPageReducer';
import usersPageReducer from './usersPageReduser';
import UserProfileReducer from './UserProfileReducer';
import {reducer as FormReducer} from 'redux-form';
import { composeWithDevTools } from '@redux-devtools/extension';

let reducers = combineReducers({
    aboutPage: aboutPageReducer,
    headerPage: HeaderReducer,
    chatPage: chatPageReducer,
    contactsPage: contactPageReducer,
    testPage: testPageReducer,
    usersPage: usersPageReducer,
    userProfilePage: UserProfileReducer,
    form: FormReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
window.store = store;

export default store;