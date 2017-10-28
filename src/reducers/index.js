import { combineReducers } from 'redux';
import MenusReducer from './reducer_menus';

const rootReducer = combineReducers({
  menus: MenusReducer
});

export default rootReducer;
