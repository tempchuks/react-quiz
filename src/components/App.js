import Header from "./Header";
import "../index.css";
import Start from "./Start";
import Loader from "./Loader";
import Main from "./Main";
import Quiz from "./Quiz";
import Finished from "./Finished";
import { useContext } from "react";
import { AppContext } from "./AppProvider";

function App() {
  const { status } = useContext(AppContext);
  return (
    <div className="app">
      <Header />
      {status === "loading" && <Loader />}
      {status === "ready" && <Start />}
      {status === "start" && (
        <Main>
          <Quiz />
        </Main>
      )}
      {status === "finished" && <Finished />}
    </div>
  );
}

export default App;
