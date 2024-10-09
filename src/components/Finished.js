function Finished({ dispatch }) {
  return (
    <div className="main">
      <p className="result">
        <span>🤨</span> You scored <strong>80</strong> out of <span>280</span>{" "}
        (29%)
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
