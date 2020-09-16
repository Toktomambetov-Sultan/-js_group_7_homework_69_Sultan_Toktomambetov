import {
  CHANGE_INPUT_VALUE,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_INIT,
  CHOICE_TV_SHOW,
} from "./actionsType";
const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, inputValue: action.inputValue };
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_INIT:
      return { ...state, TVShows: action.TVShows };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case CHOICE_TV_SHOW:
      return {
        ...state,
        currentTVShowId: action.currentTVShowId,
      };
    default:
      return state;
  }
};
export default reducer;
