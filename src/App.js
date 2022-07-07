import {
  ExtensibleStyle,
  CompoundPattern,
  RenderPropsPage,
  ControlPropsPage,
  PropsGettersPage,
  HOCPage,
  PropsGettersWithRenderPropsPage,
} from "./pages";

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
      <PropsGettersWithRenderPropsPage />
    </div>
  );
}

export default App;
