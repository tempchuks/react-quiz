import { createContext } from "react";
import React, { useEffect } from "react";
import { SEC_PER_QUESTION } from "./config";
export const AppContext = createContext();
const initialState = {
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  active: null,
  timer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "getQuestions":
      return { ...state, questions: action.payload };
    case "loading":
      return { ...state, status: "loading" };
    case "ready":
      return { ...state, status: "ready" };
    case "start":
      return {
        ...state,
        status: "start",
        timer: state.questions.length * SEC_PER_QUESTION,
      };
    case "answer":
      return {
        ...state,
        points: action.payload + state.points,
      };
    case "correctAnswer":
      return { ...state, answer: action.payload };
    case "next":
      return {
        ...state,
        index:
          state.index === state.questions.length - 1
            ? state.index
            : state.index + 1,
        answer: null,
      };
    case "finished":
      return { ...state, status: "finished" };
    case "restart":
      return { ...state, status: "ready", index: 0, points: 0 };
    case "tick":
      return { ...state, timer: state.timer - 1 };
    default:
      throw new Error("React quiz failed to start");
  }
}
function AppProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { questions, status, timer, points, index, answer } = state;
  const totalPoints = questions.reduce((cur, v) => v.points + cur, 0);
  useEffect(
    function () {
      dispatch({ type: "loading" });
      async function fetchquestions() {
        const res = await fetch("http://localhost:5000/questions");
        const data = await res.json();

        dispatch({ type: "getQuestions", payload: data });
        dispatch({ type: "ready" });
      }
      fetchquestions();
    },
    [dispatch]
  );
  return (
    <AppContext.Provider
      value={{
        questions,
        status,
        timer,
        points,
        index,
        answer,
        dispatch,
        totalPoints,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
