import { GET_ERRORS, GET_PROJECTS, GET_PROJECT } from "../actions/types";
import axios from "../axios";
export const createProject = (project, history) => async (dispatch) => {
  try {
    const res = await axios.post("save-project", project);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const updateProject = (project, history) => async (dispatch) => {
  try {
    const res = await axios.put("update-project", project);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
export const getProjects = () => async (dispatch) => {
  const res = await axios.get("get-all-projects");
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
};

export const getProject = (id, history) => async (dispatch) => {
  const res = await axios.get("get-project/" + id);
  dispatch({
    type: GET_PROJECT,
    payload: res.data,
  });
};
