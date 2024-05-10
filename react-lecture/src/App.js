import "./App.css";
import HookUseState from "./lecture/HookUserState";
import HookUseState_m from "./mission/HookUseState";
import JsxRolues from "./lecture/jsxRolues";
import JsxRolues_m from "./mission/jsxRolues";
import HookUseEffect from "./lecture/HookUseEffect";
import HookUseEffect_m from "./mission/HookUseEffect";

function App() {
  return (
    <div className="App">
      <>
        {/* 설명 컴포넌트 */}
        {/* <JsxRolues/> */}
        {/* <HookUseEffect/> */}
        <HookUseEffect_m/>

        {/* <HookUseState/> */}
        {/* <HookUseState_m /> */}
        {/* 미션 컴포넌트 */}
        {/* <JsxRolues_m/> */}
      </>
    </div>
  );
}

export default App;
