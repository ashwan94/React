import { useState } from "react";

const PropsChild2 = (props) => {
  console.log(props);

  const { num1, num2 } = props;
  console.log(num1);
  console.log(num2);

  const [number, setNumber] = useState(Number(num1)); // 문자열이었던 num1 을 Number 로 변환
  const [number2, setNumber2] = useState(num2);

  return (
    <>
      <p>숫자 1 : {number}</p>
      <button onClick={() => setNumber(number + 1)}>숫자 1 + </button>
      <button
        onClick={() => setNumber(number - 1 > 0 ? number - 1 : (number = 0))}
      >
        숫자 1 -{" "}
      </button>
      <p>숫자 2 : {number2}</p>
      <button onClick={() => setNumber2(number2 + 1)}>숫자 2 + </button>
      <button>숫자 2 - </button>
    </>
  );
};
export default PropsChild2;
