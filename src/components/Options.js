function Options({ v, i, question, correctHandler, hasAnswered, answer }) {
  return (
    <button
      disabled={hasAnswered}
      onClick={() => correctHandler(i)}
      key={`q${i}`}
      className={`btn btn-option ${answer ? "answer" : ""} ${
        hasAnswered ? (question.correctOption === i ? "correct" : "wrong") : ""
      }`}
    >
      {v}
    </button>
  );
}

export default Options;
