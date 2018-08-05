// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_EDIT_POST } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showEditPost: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        ...state,
        showAddPost: !state.showAddPost,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;
// Get showEditPost
export const getShowEditPost = state => state.app.showEditPost;

// Export Reducer
export default AppReducer;
