import { useCallback, useEffect, useRef, useState } from "react";

const HookUseCallback = () => {
  /* useCallback */
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  // 기본 함수 - 렌더링될때마다 생성
  const basicFunction = () => {
    console.log("basicFunction");
  };

  // useCallback 으로 만든 함수 - 처음 1번만 객체 생성
  const useCallbackFunction = useCallback(() => {
    console.log("useCallbackFunction");
  }, []);

  // dependency array 가 존재할 경우 해당 값이 변경될때마다 객체 생성
  const useCallbackFunction2 = useCallback(() => {
    console.log("useCallbackFunction2");
  }, [number2]);

  // 함수 객체 변경 -> 메모리 주소값 변경 => 값이 변경됐으니 useEffect 값이 변경됐을때 실행
  useEffect(() => {
    console.log("basicFunction 주소 변경됨");
  }, [basicFunction]);

  useEffect(() => {
    console.log("useCallbackFunction 주소 변경됨");
  }, [useCallbackFunction]);

  useEffect(() => {
    console.log("useCallbackFunction2 주소 변경됨");
  }, [useCallbackFunction2]);

  /* onChangeHandler */
  const [text, setText] = useState("");
  const textOnChangeHandler = useCallback((e) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {
    console.log("textOnChangeHandler");
  }, [textOnChangeHandler]);

  const [name, setName] = useState("");
  const nameOnChangeHandler = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const [tel, setTel] = useState("");
  const telOnChangeHandler = useCallback((e) => {
    setTel(e.target.value);
  }, []);

  const checkTelLength = useCallback(() => {
    if (tel.length < 10) {
      alert("올바른 전화번호를 입력하세요");
      return;
    }
    alert(`이름 : ${name}, 전화번호 : ${tel}`);
  }, [name, tel]);

  return (
    <>
      <p>num : {number1}</p>
      <button
        onClick={() => {
          setNumber1(number1 + 1);
        }}
      >
        숫자 상승 +{" "}
      </button>
      <br />
      <p>num : {number2}</p>
      <button
        onClick={() => {
          setNumber2(number2 + 1);
        }}
      >
        숫자 상승 +{" "}
      </button>
      <br />
      <p>{text}</p>
      <input type="text" onChange={textOnChangeHandler} />
      <br />
      {/* 사용자에게 이름, 전화번호 입력받아 알림버튼 클릭 시
        이름, 전화번호 같이 알림창 띄우기
        단, 전화번호 길이는 11자리가 되어야만 완료*/}
      <label>
        이름
        <input type="text" onChange={nameOnChangeHandler} />
      </label>
      <label>
        전화번호
        <input type="tel" onChange={telOnChangeHandler} />
      </label>
      <button onClick={checkTelLength}>
        알림
      </button>
    </>
  );
};
export default HookUseCallback;
