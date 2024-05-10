const JsxRolues = () => {
  const qnaList = [
    { question: "Q1. 이름은?", answer: "A1. 신짱구" },
    { question: "Q2. 나이는?", answer: "A2. 5살" },
    { question: "Q3. 유치원?", answer: "A3. 떡잎유치원" },
    { question: "Q4. 강아지?", answer: "A4. 흰둥이" },
  ];

  const fruits = [
    { fruit: "사과", price: 1000 },
    { fruit: "바나나", price: 2000 },
    { fruit: "딸기", price: 3000 },
    { fruit: "복숭아", price: 4000 },
    { fruit: "오렌지", price: 5000 },
  ];

  return (
    <>
      {/* 문제 1. 모든 QnA 목록 출력 */}
      <h1 style={{ backgroundColor: "red" }}>1번 문제</h1>
      {qnaList.map((v, i) => {
        return (
          <ul type="none" key={i}>
            {/* 객체 자체를 넣으면 에러 발생
                그러므로 key 를 통해 value 를 가져와야함*/}
            <li>{v.question}</li>
            <li>{v.answer}</li>
          </ul>
        );
      })}
      <hr />

      {/* 문제 2. Q4 를 제외한 질문 목록 */}
      <h1 style={{ backgroundColor: "red" }}>2번 문제</h1>
      {qnaList.map((v, i) => {
        return !v.question.includes("Q4") ? (
          <ul key={`a-${i}`} type="none">
            <li>{v.question}</li>
            <li>{v.answer}</li>
          </ul>
        ) : null;
      })}

      <hr />

      {/* 문제 3. 과일의 이름 : 가격 + 이미지까지 한꺼번에 출력 */}
      <h1 style={{ backgroundColor: "red" }}>3번 문제</h1>
      {fruits.map((v, i) => {
        return (
          <div key={i}>
            <img src={`/images/fr${i + 1}.jpg`} alt={v.fruit} style={{width:"100px"}} />
            <div>
              {v.fruit}의 가격 : <span>{v.price}원</span>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default JsxRolues;
