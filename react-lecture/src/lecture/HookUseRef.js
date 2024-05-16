import { useEffect, useRef, useState } from "react";

const HookUseRef = () => {
  /* useRef */
  console.log(" ====> rendering <===== ");
  let letNumber = 0;
  const [number, setNumber] = useState(0);
  const numberRef = useRef(0); // ref 객체

  const goAddLetNumber = () => {
    letNumber++;
    console.log(letNumber);
  };
  const goAddNumber = () => {
    setNumber(number + 1);
  };
  const goAddNumberRef = () => {
    numberRef.current++;
    console.log("ref : ", numberRef.current);
  };

  console.log(numberRef);

  /* DOM 접근 */
  const [userId, setUserId] = useState("");
  const idOnChangeHandler = (e) => {
    setUserId(e.target.value);
  };

  const checkId = "user123";
  const idRef = useRef(); // useRef 객체 생성
  const goLogin = () => {
    if (userId == checkId) {
      alert("로그인 완료!");
    } else {
      idRef.current.style.backgroundColor = "yellow";
    }
  };

  const goFindId = () => {
    const existAcc = JSON.parse(localStorage.getItem("acc"));
    if (userId == existAcc.userId) {
      alert(`당신의 ID : ${existAcc.userId}`);
    } else {
      alert("올바르지 않은 접근입니다.");
      idRef.current.focus();
    }
  };
  const acc = { userId: "user123", userName: "신짱구" };
  localStorage.setItem("acc", JSON.stringify(acc));

  // 아이디 찾기
  // 1) localStorage : {userId : user123, userName : 신짱구}
  // 2) 사용자에게 이름을 입력받고, 입력받은 이름이 local userName 과 일치하면 userId 를 alert 로 알림
  // 3) 만약 일치하지 않다면, 입력 창의 BG 를 pink 로 변경

  return (
    <>
      <p>letNumber : {letNumber}</p>
      <p>number : {number}</p>
      <p>numberRef : {numberRef.current}</p>
      <br />
      <button onClick={goAddLetNumber}>letNumber +</button>
      <button onClick={goAddNumber}>number +</button>
      <button onClick={goAddNumberRef}>numberRef +</button>
      <p>로그인</p>
      <input ref={idRef} type="text" onChange={idOnChangeHandler} />
      <button onClick={goLogin}>로그인하기</button>
      <button onClick={goFindId}>아이디 찾기</button>
    </>
  );
};
export default HookUseRef;
