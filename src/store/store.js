import {createStore,combineReducers} from 'redux';
import * as sider from './sider/reducer';

const store = createStore(
    combineReducers({...sider})
)

export default store;