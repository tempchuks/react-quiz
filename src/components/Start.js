import { useContext } from "react";
import { AppContext } from "./AppProvider";

function Start() {
  const { questions, dispatch } = useContext(AppContext);
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{questions?.length} questions to test your React mastery</h3>
      <button onClick={() => dispatch({ type: "start" })} className="btn">
        Let's start
      </button>
    </div>
  );
}

export default Start;
