import React, { useReducer } from "react";
import "./App.css";
import Layuot from "../../components/Layuot/Layuot";
import reducer from "./store/reducer";
import initialState from "./store/initialState";
import actions from "./store/actions";
import InfoForOne from "../../components/InfoForOne/InfoForOne";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeInputValue = (event) => {
    const value = event.target.value;
    dispatch(actions.changeInputValue(value));
    actions.fetch(value, dispatch);
    dispatch((e) => console.log(e));
  };
  const choiceTVShow = (id) => {
    const TVShow = state.TVShows.find((elem) => elem.show.id === id);
    console.log(TVShow);
    dispatch(actions.choiceTVShow(JSON.stringify(TVShow)));
    dispatch(actions.changeInputValue(TVShow.show.name));
    dispatch(actions.clearTVList());
  };
  const currentTVShow = JSON.parse(state.currentTVShow);
  return (
    <Layuot
      TVShows={state.TVShows}
      value={state.inputValue}
      onChangeInput={changeInputValue}
      choiceTVShow={choiceTVShow}
    >
      {currentTVShow ? <InfoForOne TVShow={currentTVShow}></InfoForOne> : null}
    </Layuot>
  );
}

export default App;
