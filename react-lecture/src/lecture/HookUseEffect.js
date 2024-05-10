import { useEffect, useState } from "react";

const HookUseEffect = () => {
  console.log("======> rendering <======");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  // 렌더링 순서
  //   useEffect(() => {
  //     console.log("=> 매번 렌더링");
  //   });

  // dependency array = 빈 배열일때 딱 1번만 렌더링(첫 로딩 시). 이외에는 동작하지 않음
  //   useEffect(() => {
  //     console.log("=> 처음에만 렌더링 <=");
  //   }, []);
  //   useEffect(() => {
  //     console.log("useEffect 는 순서대로 실행");
  //   }, []);

  useEffect(() => {
    console.log("=> count 상태 변화됨");
  }, [count]);

  useEffect(() => {
    console.log(" => name 상태 변화 <= ");
  }, [name]);
  useEffect(() => {
    console.log(" => list 상태 변화 <= ");
  }, [list]);

  const goAddCount = () => {
    setCount(count + 1);
  };

  const goAddName = () => {
    setList([...list, name]);
    setName("");
  };

  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };

  const [num, setNum] = useState(0);
  const [cnt, setCnt] = useState(0);

  const goAddNum = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    setCnt(num * 2);
  }, [num]);

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={goAddCount}>카운트 + </button>
      <br />

      <label>
        추가할 이름
        <input type="text" onChange={nameOnChangeHandler} value={name} />
      </label>
      <button onClick={goAddName}>이름 추가</button>
      <br />
      <p>이름 목록</p>
      {list.map((v, i) => {
        return <p key={i}>{v}</p>;
      })}

      <div>
        {/* 숫자 up -> num + 1 -> num의 값이 바뀌었을때 바뀐 값의 2배한 숫자 입력 */}
        <p>숫자 : {num}</p>
        <p>2배 : {cnt}</p>
        <button onClick={goAddNum}>숫자 up</button>
      </div>
    </div>
  );
};
export default HookUseEffect;
