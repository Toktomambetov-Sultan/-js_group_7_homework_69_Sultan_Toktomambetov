import {
  CHANGE_INPUT_VALUE,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_INIT,
  CHOICE_TV_SHOW,
  CLEAR_TV_LIST,
} from "./actionsTypes";
import axiosOrder from "../../../axiosOrder";
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
  choiceTVShow(TVShow) {
    return {
      type: CHOICE_TV_SHOW,
      currentTVShow: TVShow,
    };
  },
  clearTVList(){
    return {
      type: CLEAR_TV_LIST,
    }
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
