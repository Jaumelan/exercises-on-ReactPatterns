import ExtensibleStyle from "./components/ExtensibleStyle";
import CompoundPattern from "./components/CompoundPattern";
import RenderPropsPage from "./components/BugPage";
import ControlPropsPage from "./components/ControlProps";
import PropsGettersPage from "./components/PropsGettersPage";
import HOCPage from "./components/HOCPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <ExtensibleStyle />
      <CompoundPattern />
      <RenderPropsPage />
      <ControlPropsPage />
      <PropsGettersPage />
      <HOCPage />
    </div>
  );
}

export default App;
