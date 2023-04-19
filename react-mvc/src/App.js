import MyController from "./MyController";
import useObservedState from "./useObservedState";

const controller = new MyController();

function App() {
  const state = useObservedState(controller);

  const inputNameHandler = (e) => {
    e.preventDefault();

    const nom = e.currentTarget.value;

    controller.setNom(nom);
  };

  return (
    <div className="App">
      <input onChange={inputNameHandler} value={state.nom} />
    </div>
  );
}

export default App;
