import { useContext } from "react";
import Options from "./Options";
import { AppContext } from "./AppProvider";
function Quiz() {
  const { questions, dispatch, answer, index } = useContext(AppContext);
  const hasAnswered = answer !== null;
  function correctHandler(indec) {
    dispatch({
      type: "answer",
      payload:
        indec === questions[index].correctOption ? questions[index].points : 0,
    });
    dispatch({
      type: "correctAnswer",
      payload: questions[index].correctOption,
    });
  }
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <div className="options">
        {questions[index].options.map((v, i) => (
          <Options
            correctHandler={correctHandler}
            v={v}
            i={i}
            question={questions[index]}
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
