import { PROJECTS_FETCH_DATA } from '../actions/projectsActions';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_FETCH_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
};
