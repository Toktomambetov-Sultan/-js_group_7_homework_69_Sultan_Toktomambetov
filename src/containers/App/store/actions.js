import {
  CHANGE_INPUT_VALUE,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_INIT,
  CHOICE_TV_SHOW,
} from "./actionsType";
import axiosOrder from "../../../axiosOrder";
import { recomposeColor } from "@material-ui/core";
const fetchSuccess = () => {
  return {
    type: FETCH_SUCCESS,
  };
};
const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    error: error,
  };
};
const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};
const fetchTVInit = (TVShows) => {
  return {
    type: FETCH_INIT,
    TVShows: TVShows,
  };
};
const actions = {
  changeInputValue(value) {
    return { type: CHANGE_INPUT_VALUE, inputValue: value };
  },
  choiceTVShow(id) {
    return {
      type: CHOICE_TV_SHOW,
      currentTVShowId: id,
    };
  },
  async fetch(searchQuery, dispatch) {
    const response = await axiosOrder("?q=" + searchQuery);
    dispatch(fetchTVInit(response.data));
    dispatch(fetchRequest());
    try {
      fetchTVInit(response.data);
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error));
    }
  },
};

export default actions;
