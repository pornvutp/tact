import { combineReducers } from 'redux';
import MenusReducer from './reducer_menus';
import ActiveMenu from './reducer_active_menu';

const rootReducer = combineReducers({
  menus: MenusReducer,
  activeMenu: ActiveMenu
});

export default rootReducer;
