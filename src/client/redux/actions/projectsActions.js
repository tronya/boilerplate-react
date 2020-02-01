import { getData } from '../../helpers/GET';

export const PROJECTS_FETCH_DATA = 'PROJECTS_FETCH_DATA';

export const fetchProjectData = () => dispatch => getData('projects')
    .then(resp => {
      if (resp) {
        const modifyData = resp.map(item => item.project_task);
        dispatch({
          type: PROJECTS_FETCH_DATA,
          payload: modifyData,
        });
        return resp;
      }
    })
    .catch(error => {
      console.warn(error);
    });
