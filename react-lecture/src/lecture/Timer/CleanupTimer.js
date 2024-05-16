import { useEffect, useState } from "react";

const CleanupTimer = () => {
  const [seconds, setSeconds] = useState(120);

  // 함수형 업데이트 방식
  useEffect(() => {
    const timer = setInterval(() => {
      // setSeconds((prev) => prev -1 );

      // component 가 unmount 되었을때 function 을 정리한다
      setSeconds((prev) => {
        console.log(prev); // 이전 값 확인
        return prev - 1;
      });

      console.log("타이머 살아있음");
    }, 1000);

    // 해당 컴포넌트가 마운트 해제 시 실행
    // 타이머 또는 함수 자체가 살아있는 경우 >> 반드시 clean up 시켜주기
    return() => {
        console.log("타이머 해제");
        clearInterval(timer);
    };
  }, []);
  return (
    <>
      <p>Timer : {seconds}</p>
    </>
  );
};
export default CleanupTimer;
