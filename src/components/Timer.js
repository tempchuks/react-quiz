import { useEffect } from "react";

function Timer({ timer, dispatch }) {
  const min = Math.floor(timer / 60);
  const sec = timer % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      if (timer === 0) dispatch({ type: "restart" });
      return () => clearInterval(id);
    },
    [dispatch, timer]
  );
  return (
    <div className="timer">
      {`${min < 10 ? 0 : ""}${min}`}:{`${sec < 10 ? 0 : ""}${sec}`}
    </div>
  );
}

export default Timer;
