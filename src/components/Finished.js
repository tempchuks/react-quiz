import { useContext } from "react";
import { AppContext } from "./AppProvider";

function Finished() {
  const { dispatch, totalPoints, points } = useContext(AppContext);
  const perc = Math.ceil((points / totalPoints) * 100);
  return (
    <div className="main">
      <p className="result">
        <span>🤨</span> You scored <strong>{points}</strong> out of{" "}
        <span>{totalPoints}</span> ({perc}%)
      </p>
      <footer>
        <button
          onClick={() => dispatch({ type: "restart" })}
          className="btn btn-ui"
        >
          Restart
        </button>
      </footer>
    </div>
  );
}

export default Finished;
