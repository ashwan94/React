import "./App.css";
import JsxRolues from "./lecture/jsxRolues";
import JsxRolues_m from "./mission/jsxRolues";

function App() {
  return <div className="App">
    {/* 설명 컴포넌트 */}
    <JsxRolues/>

    {/* 미션 컴포넌트 */}
    <JsxRolues_m/>
  </div>;
}

export default App;
