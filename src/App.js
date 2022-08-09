import "./App.css";
import CompoundUser from "./patterns/CompoundComponent/CompoundUser";
import ContextUser from "./patterns/ContextAPI/ContextUser";
import ControlPropsUser from "./patterns/ControlProps/ControlPropsUser";
import HookUser from "./patterns/CustomHook/HookUser";
import HOCUserComp from "./patterns/HOC/HOCUserComp";
import RenderPropsUser from "./patterns/RenderProps/RenderPropsUser";

function App() {
  return (
    <div className="App">
      <h2>Switch App</h2>
      {/* Compound Component Pattern */}
      {/* <CompoundUser/> */}

      {/* Render Props patterns & State Initializers*/}
      {/* <RenderPropsUser /> */}

      {/* Control Props Pattern */}
      {/* <ControlPropsUser/> */}

      {/* Cotext API */}
      {/* <ContextUser/> */}

      {/* Higher Order Component */}
      {/* <HOCUserComp/> */}
      <HookUser/>
    </div>
  );
}

export default App;
