const PropsChild = (props) => {
  // 부모 컴포넌트에서 넘어온 값에 대해 초기설정 또는 오류처리를 고려해야됨
  // 초기값은 undefined 로 할당됨
  // 논리연산자를 활용한 오류 처리
  const { userName, userId, friends, info } = props; // 구조 분해 할당

  const userFriends = friends || [];

  const obj = { name: "짱구", info: { age: 5, frineds: [1, 2] } };
  console.log(obj.info?.age2?.age);

  const test = obj.info.age2?.age || "123";
  console.log(test);

  return (
    <div style={{ width: "200px", height: "200px", border: "1px solid" }}>
      <p>옵셔널 체이닝 : {obj.info?.age2?.age}</p>

      <p>
        사용자 이름/나이 : {userName} / {info.age}
      </p>
      <p>사용자 아이디 : {userId}</p>
      <p>친구 목록 : </p>
      {/* map 을 돌리기 전 해당 값이 배열로 들어올 것이라는 확신이 없을때
         논리연산자로 오류 방지 */}
      {friends &&
        friends.map((v, i) => {
          return <span key={i}>{v}</span>;
        })}
    </div>
  );
};
export default PropsChild;
