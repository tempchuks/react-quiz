import { useContext } from "react";
import Timer from "./Timer";
import { AppContext } from "./AppProvider";

function Main({ children }) {
  const { questions, dispatch, index, points, answer, timer, totalPoints } =
    useContext(AppContext);

  return (
    <div className="main">
      <header className="progress">
        <progress max={questions?.length} value={index + 1}></progress>

        <p>
          Questions <strong>{index + 1}</strong>/{questions.length}
        </p>
        <p>
          Questions <strong>{points}</strong>/{totalPoints}
        </p>
      </header>
      {children}
      <footer>
        <Timer timer={timer} dispatch={dispatch} />
        {answer !== null && (
          <button
            onClick={() => {
              dispatch({ type: "next" });
              if (index === questions.length - 1)
                dispatch({ type: "finished" });
            }}
            className="btn btn-ui"
          >
            {index === questions.length - 1 ? "Finish" : "Next"}
          </button>
        )}
      </footer>
    </div>
  );
}

export default Main;
