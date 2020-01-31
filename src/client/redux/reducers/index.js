import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';

const allReducers = combineReducers({
  projects: projectsReducer,
});

export default allReducers;
