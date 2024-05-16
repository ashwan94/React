import { useState } from "react";
import CleanupTimer from "./CleanupTimer";

const Cleanup = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>타이머 보이기</button>
      <button onClick={() => setShow(false)}>타이머 숨기기</button>
      {show ? <CleanupTimer /> : null}
    </div>
  );
};
export default Cleanup;
