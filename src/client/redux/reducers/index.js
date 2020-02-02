import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import projectsReducer from './projectsReducer';
import userReducer from './userReducer';

const allReducers = combineReducers({
  projects: projectsReducer,
  user: userReducer,
  form: formReducer,
});

export default allReducers;
