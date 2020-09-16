import {
  CHANGE_INPUT_VALUE,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_INIT,
  CHOICE_TV_SHOW,
} from "./actionsType";
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
  choiceTVShow(id) {
    return {
      type: CHOICE_TV_SHOW,
      currentTVShowId: id,
    };
  },
  fetch(searchQuery) {
    return async (dispacth) => {
      console.log(1)
      dispacth(fetchRequest());
      try {
        const response = await axiosOrder("?q=" + searchQuery);
        // dispacth(fetchTVInit(response.data));
        dispacth(fetchSuccess());
      } catch (error) {
        dispacth(fetchError(error));
      }
    };
  },
};

export default actions;
