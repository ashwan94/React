import { useState } from "react";
import PropsChild from "./PropsChild";
import PropsChild2 from "./PropsChild2";
import PropsPopup from "./PropsPopup";

const PropsSend = () => {
  const [show, setShow] = useState(false);
  const goOpen = () => {
    setShow(true);
  };
  const goClose = () => {
    setShow(false);
  };

  const num1 = "10";
  const num2 = 10;

  // 팝업 관련 함수
  const [open, setOpen] = useState(false);
  const openPopup = () => {
    setOpen(true);
  };

  // 팝업창 닫기
  const close = (param) => {
    console.log("param :", param);
    const {close, email, userName} = param;

    if (close) {
      setOpen(false);
      if(email && userName){
        console.log(`부모에서 감지된 email 값 : ${email}`);
        console.log(`부모에서 감지된 userName 값 : ${userName}`);
      }
    }
  };

  return (
    <div>
      <p>자식 컴포넌트 열기</p>
      <button onClick={goOpen}>자식 열기</button>
      <button onClick={goClose}>자식 닫기</button>

      {/* 자식 컴포넌트 붙이기 */}
      {show ? (
        // <PropsChild
        //   userName="신짱구"
        //   userId="jjang"
        //   friends={["철수", "맹구"]}
        //   info={{ age: 5 }}
        // />
        // num1(문자열), num2(숫자) 의 value 를 자식 컴포넌트로 넘겨서 +, - 연산
        <PropsChild2 num1={num1} num2={num2} />
      ) : null}
      <br />
      {/* 자식에서 부모로 값을 직접 전달은 안된다 */}
      <button onClick={openPopup}>팝업 열기</button>
      {open ? <PropsPopup onClose={close} /> : null}
    </div>
  );
};
export default PropsSend;
