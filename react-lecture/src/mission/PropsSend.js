import { useEffect, useState } from "react";
import Login from "./Login";

const PropsSend = () => {
  const [open, setOpen] = useState(false);
  const openPopup = () => {
    setOpen(true);
    setLogName(""); // 로그인 완료 후 welcome() 실행 방지
  };

  // 자식에서 submit 버튼을 눌렀을때 작동할 함수
  const [logName , setLogName] = useState("");
  const close = (param) => {
    console.log("param :", param);
    const { close, name } = param;

    if (close) {
      setOpen(false); // 버튼 끄기
      if (name) {
        console.log(`부모에서 감지된 name 값 : ${name}`);
        setLogName(name);
      }
    }
  };

  const welcome = () => {
    return (
      <div className="rounded-xl bg-white shadow-xl">
        <div className="p-6 sm:p-16">
          <div className="space-y-4">
            <img
              src="https://tailus.io/sources/blocks/social/preview/images/icon.svg"
              loading="lazy"
              className="w-10"
              alt="tailus logo"
            />
            <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
              {logName ? logName + "님 환영합니다" : null}
            </h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <button onClick={openPopup}>로그인</button>
        {open ? <Login onClose={close} /> : null}
        {/* 자식 컴포넌트로 close 라는 함수를 전달
            여기서 onClose 는 HTML 속성이 아니라 object 의 key 값이다. {close} 는 그에 따른 value 이다 */}
      </div>
      {logName ? welcome() : null}
    </>
  );
};
export default PropsSend;
