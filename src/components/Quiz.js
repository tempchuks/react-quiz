import Options from "./Options";
function Quiz({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  function correctHandler(index) {
    dispatch({
      type: "answer",
      payload: index === question.correctOption ? question.points : 0,
    });
    dispatch({
      type: "correctAnswer",
      payload: question.correctOption,
    });
  }
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((v, i) => (
          <Options
            correctHandler={correctHandler}
            v={v}
            i={i}
            question={question}
            dispatch={dispatch}
            key={i}
            hasAnswered={hasAnswered}
            answer={answer}
          />
        ))}
      </div>
    </div>
  );
}

export default Quiz;
