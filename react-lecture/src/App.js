import "./App.css";
import HookUseState from "./lecture/HookUserState";
import HookUseState_m from "./mission/HookUseState";
import JsxRolues from "./lecture/jsxRolues";
import JsxRolues_m from "./mission/jsxRolues";
import HookUseEffect from "./lecture/HookUseEffect";
import HookUseEffect_m from "./mission/HookUseEffect";
import HookUseRef from "./lecture/HookUseRef";
import HookUseRef_m from "./mission/HookUseRef";
import HookUseCallback from "./lecture/HookUseCallback";
import HookUseCallback_m from "./mission/HookUseCallback";
import PropsSend from "./lecture/PropsSend";
import PropsSend_m from "./mission/PropsSend";
import Cleanup from "./lecture/Timer/Cleanup";
import Schedule from "./lecture/schedule/Schedule";
import Schedule_m from "./mission/Schedule/Schedule";
import EventPopup from "./mission/Schedule/EventPopup";

function App() {
  return (
    <div className="App">
      <>
        {/* 설명 컴포넌트 */}
        {/* <JsxRolues/> */}
        {/* <HookUseEffect/> */}
        {/* <HookUseState/> */}
        {/* <HookUseRef /> */}
        {/* <HookUseCallback/> */}
        {/* <PropsSend/> */}
        {/* <Cleanup/> */}
        {/* <Schedule/> */}

        {/* 미션 컴포넌트 */}
        {/* <JsxRolues_m/> */}
        {/* <HookUseState_m /> */}
        {/* <HookUseEffect_m/> */}
        {/* <HookUseRef_m/> */}
        {/* <HookUseCallback_m/> */}
        {/* <PropsSend_m /> */}
        <Schedule_m/>
      </>
    </div>
  );
}

export default App;
