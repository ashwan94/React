// component 를 내보낼때 Pascal case 로 명명한다
const JsxRolues = () => {
  /* jsx문법 : js 확장 문법
        babel : jsx 문법으로 작성된 data 를 js code 로 변환시켜준다
    */

  // 1. 하나의 부모 태그로 감싸야 함
  // 2. 스타일 구조가 걱정될땐 빈 태그 <></> 빈 태그로 감싸기
  // 3. 종료 태그 반드시 작성 (<input> 등)
  // 4. class -> className 으로 작성한다
  // 5. style 속성은 객체 형태 {속성명 : 속성값} 로 작성
  // 6. 모든 속성은 반드시 camel case 로 작성되어야 함
  // 7. js 변수를 대입해서 사용 가능
  // html 태그 내에 js 관련 문법 작성 시에는 { } 를 사용하면 된다
  // 8. 조건문 -> 삼항 연산자를 사용한다
  // 9. 반복문 -> map

  const title = "제목이다";
  const arr = [1, 2, 3];

  const sum = (arr) => {
    let total = 0;
    // for of 문을 map 으로 변경
    arr.map((v) => {
      total += v;
    });
    return total;
  };

  const confirm = true;

  const friends = ["짱구", "철수", "훈이", "맹구", "유리"];
  return (
    <>
      <h2>친구 목록</h2>
      <ul>
        {/* map((요소, 인덱스) => {})
        map 은 method 이기 때문에 반드시 return 이 명시돼 있어야한다
        태그 생성 후에는 반드시 각 요소들에 대해 key 에 대한 value 를 지정해줘야 함
        */}

        {friends.map((v, i) => {
          return <li key={`fr-${i}`}>{v}</li>;
        })}
      </ul>

      <h2>훈이 빼기</h2>
      {friends.map((v, i) => {
        return v != "훈이" ? <li key={i}>{v}</li> : null;
      })}

      <h2>훈이 진짜 제거함</h2>
      {friends.map((v, i) => {
        if (v != "훈이") {
          return <li key={i}>{v}</li>;
        }
      })}
    </>
  );

  //   return (
  //     <>
  //       <h2>{title}</h2>
  //       <h3>{10 > 20}</h3>
  //       <h3>{sum([1, 2, 3])}</h3>

  //       <p>{confirm ? "진짜" : "가짜"}</p>

  //       {confirm ? (
  //         <>
  //           <h1>
  //             진짜<span>가 나타났다!</span>
  //           </h1>
  //           <h1>오류는 오류동에서 발생했다</h1>
  //         </>
  //       ) : null}

  //       <input type="checkbox" />
  //       <ul className="list" style={{ color: "red", backgroundColor: "blue" }}>
  //         <li>목록1</li>
  //         <li>목록2</li>
  //       </ul>
  //       <ul>
  //         <li>목록3</li>
  //         <li>목록4</li>
  //       </ul>

  //       {/* label 로 감싸면 내부 태그의 content 만 클릭해도 반응한다 */}
  //       <label>
  //         이름
  //         <input type="text" />
  //       </label>
  //       <label htmlFor="userTel">전화번호</label>
  //       <input type="text" id="userTel" />
  //       <label>
  //         <input type="checkbox" value="css" />
  //         css
  //       </label>
  //     </>
  //   );
};
export default JsxRolues;
