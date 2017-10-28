export default function(state = null, action){
  switch (action.type) {
    case 'menu_selected':
      return action.payload;
  }
  return state;
}
