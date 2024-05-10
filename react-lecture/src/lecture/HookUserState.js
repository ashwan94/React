import { useState } from "react";

const HookUseState = () => {
  /* useState 
    - 상태(state) 가 변경되는걸 감지해줌(상태값 변경할 수 있게 도와주는 hook)

    const [state, setState] = useState(초깃값)
    state : 현재 상태값
    setState : 상태 업데이트 함수
    - setState 는 비동기 처리이다
    - setState(updater(함수), [callback])
    */

  console.log("============> rendering <=============");
  /* let 에 value 를 매핑 */
  let letNum = 0;

  // useState 변수 선언
  const [count, setCount] = useState(2);

  const addLetNum = () => {
    letNum++;
    console.log(letNum);
  };

  const addCount = () => {
    // count++;
    // useState 로 만들어진 method 는 반드시 set 을 통해 제어한다
    setCount(count + 1);
    console.log("count : ", count);
    // 비동기 처리이므로 여기 찍히는 콘솔 data 는 이전 값을 출력해주고 있다
  };

  // 복습용
  const [num, setNum] = useState(0);
  const goAdd = () => {
    setNum(num + 1 > 10 ? 10 : num + 1);
  };

  // 사용자 입력 관련 핸들러
  const [userName, setUserName] = useState("");
  const userNameOnChangeHandler = (e) => {
    // console.log(e.target.value);
    setUserName(e.target.value);
  };

  // 사용자 이름 추가
  const [list, setList] = useState([]); // 초기 list 를 빈 배열로 선언
  const goAddUserName = () => {
    console.log("최종 : ", userName);
    setList([...list, userName]); // 배열의 주소값은 변동이 없으므로 강제로 배열이 변화됐다고 감지되도록 하는 것
    setUserName("");
  };

  /* 입력 창 만들기 : 이름
  사용자가 입력한 새로운 이름을
  friends 에 담아서 화면에 출력하기
  
  1. 이름 입력창 생성
  2. 이름 추가 버튼 생성
  */
  const [friendName, setFriendName] = useState(""); // 사용자에게 입력받은 값
  const friendNameOnChangeHandler = (e) => {
    setFriendName(e.target.value);
  };

  const arr = ["유리", "철수"];
  const [friends, setFriends] = useState(arr);
  const goAddFriend = () => {
    setFriends([...friends, friendName]);
    setFriendName("");
  };

  const [score, setScore] = useState(0);

  const addLetScore = () => {
    setScore(score + 1);
  };

  const minusLetScore = () => {
    setScore(score - 1 < 0 ? 0 : score - 1);
    // count 를 음수가 되는걸 방지
  };

  return (
    <>
      {/* let 과 useState 의 차이 */}
      <p>letNum 값 : {letNum}</p>
      <p>count값 : {count}</p>
      <button onClick={addLetNum}>letNum +</button>
      <button onClick={addCount}>count +</button>

      {/* 점수 관리
        1) 점수 상태 변수
        2) 점수 +, - 에 따라 1씩 증감하는 method 를 만들어 set 함수로 state 감지시키기
    */}
      <p>현재 점수 : {score}</p>
      <button onClick={addLetScore}>점수 +</button>
      <button onClick={minusLetScore}>점수 -</button>

      {/* <p>숫자 : {num}</p>
      <button onClick={goAdd}>숫자 Up</button> */}

      {/* 이름 관리 목록 */}
      <p>
        <label htmlFor="userName">이름 입력</label>
        <input
          type="text"
          id="userName"
          onChange={userNameOnChangeHandler}
          value={userName}
        />
      </p>
      <button onClick={goAddUserName}>이름 추가</button>

      <p>사용자 이름 목록</p>
      <ul>
        {list.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ul>

      <p>미션</p>
      <input type="text" onChange={friendNameOnChangeHandler} value={friendName}/>
      <button onClick={goAddFriend}>친구 추가</button>

      {friends.map((v, i) => {
        return <p key={i}>{v}</p>;
      })}
    </>
  );
};

export default HookUseState;
