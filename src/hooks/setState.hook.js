import {useState} from "react";

export default (initialState) => {
  const [state, setState] = useState(initialState);

  const getState = async () => {
    let state;
    await setState((currentState) => {
      state = currentState;
      return currentState;
    });
    return state;
  };

  return [state, setState, getState];
};
