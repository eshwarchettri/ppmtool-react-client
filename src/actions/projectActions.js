import { GET_ERRORS } from "../actions/types";
import axios from "../axios"
export const createProject = (project, history) => async (dispatch) => {
  try {
    const res = await axios.post("save-project", project);
    history.push("/dashboard");
  } catch (err) {
      console.log(err);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
