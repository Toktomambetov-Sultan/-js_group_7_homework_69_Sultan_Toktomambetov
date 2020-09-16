import React, { useReducer } from "react";
import "./App.css";
import Layuot from "../../components/Layuot/Layuot";
import reducer from "./store/reducer";
import initialState from "./store/initialState";
import actions from "./store/actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeInputValue = (event) => {
    const value = event.target.value;
    dispatch(actions.changeInputValue(value));
    actions.fetch(value, dispatch);
    dispatch((e) => console.log(e));
  };
  const choiceTVShow = (id) => {
    dispatch(actions.choiceTVShow(id));
  };
  return (
    <Layuot
      TVShows={state.TVShows}
      value={state.inputValue}
      onChangeInput={changeInputValue}
      choiceTVShow={choiceTVShow}
    >
      {state.currentTVShowId ? state.currentTVShowId : null}
    </Layuot>
  );
}

export default App;
