import "../css/form.css";
import { useState, useCallback, useRef } from "react";

const HookUseCallback = () => {
  /* 입력요소들 변수 */
  const [userId, setUserId] = useState(""); //사용자아이디
  const [userPw, setUserPw] = useState(""); //사용자비번
  const [userPwConfirm, setUserPwConfirm] = useState(""); //사용자비번확인
  const [userPhone, setUserPhone] = useState(""); //사용자전화번호
  const [userName, setUserName] = useState(""); // 사용자이름
  const [userBirth, setUserBirth] = useState(""); //사용자생년월일

  /* 입력요소 핸들러 */
  const userIdOnChangeHandler = useCallback((e) => {
    setUserId(e.target.value);
  }, []);
  const userPwOnChangeHandler = useCallback((e) => {
    setUserPw(e.target.value);
  }, []);
  const userPwConfirmOnChangeHandler = useCallback((e) => {
    setUserPwConfirm(e.target.value);
  }, []);
  const userPhoneOnChangeHandler = useCallback((e) => {
    setUserPhone(e.target.value);
  }, []);
  const userNameOnChangeHandler = useCallback((e) => {
    setUserName(e.target.value);
  }, []);
  const userBirthOnChangeHandler = useCallback((e) => {
    setUserBirth(e.target.value);
  }, []);

  /* 비밀번호 확인 */
  const [isConfirm, setIsConfirm] = useState(false);
  const goConfirmPw = () => {
    //1. 비밀번호 값 없을때
    if (userPw == "") {
      alert("비밀번호 입력하세요");
      return;
    }
    //2. 비밀번호 확인 값 없을때
    if (userPwConfirm == "") {
      alert("비밀번호 확인을 입력하세요");
      return;
    }
    //3. 비밀번호 일치여부
    if (userPw == userPwConfirm) {
      alert("비밀번호가 일치합니다.");
      setIsConfirm(true);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      setIsConfirm(false);
    }
  };

  /* 유효성 검사 */
  const userIdRef = useRef(null);
  const validationCheck = () => {
    //값이 비어있는것, 정규식체크, 길이체크 등
    if (userId != "") {
      userIdRef.current.style.display = "none";
    } else {
      userIdRef.current.style.display = "";
      return false;
    }

    return true;
  };

  /* 회원가입 */
  const goSignUp = () => {
    //유효성검사
    const res = validationCheck();
    console.log(res);
    if (res) {
      //1. 비밀번호 확인 완료 여부
      if (userPw != userPwConfirm) {
        setIsConfirm(false);
        return;
      }
      if (!isConfirm) {
        alert("비밀번호 확인부터 하세요.");
        return;
      }
      //2. 생년월일 8자리인지 체크

      if (userBirth.length != 8) {
        alert("생년월일을 8자리로 입력하세요.");
        return;
      }
      //3. 정상일경우 콘솔 출력
      const info = {
        id: userId,
        pw: userPw,
        phone: userPhone,
        name: userName,
        birth: userBirth,
      };
      console.log(info);
    }
  };

  return (
    <div className="demo-page">
      <main className="demo-page-content">
        <section>
          <div className="href-target" id="input-types"></div>
          <h1>회원가입</h1>
          <p>회원가입을 위한 정보를 입력해주세요</p>

          <div className="nice-form-group">
            <label htmlFor="userId">아이디</label>
            <input
              type="text"
              placeholder="Your Id"
              onChange={userIdOnChangeHandler}
            />
          </div>
          <p ref={userIdRef} style={{ display: "none" }}>
            아이디를 입력하세요.
          </p>
          <div className="nice-form-group">
            <label htmlFor="userPw">비밀번호</label>
            <input
              type="password"
              placeholder="Your Pw"
              onChange={userPwOnChangeHandler}
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="userPwConfirm">비밀번호 확인</label>
            <input
              type="password"
              placeholder="Your Pw Confirm"
              style={{ width: "60%" }}
              onChange={userPwConfirmOnChangeHandler}
            />
            <div
              className="to-reset confirm-btn"
              style={{ marginLeft: "3px", height: "2.5rem" }}
              onClick={goConfirmPw}
            >
              비밀번호 확인
            </div>
          </div>

          <div className="nice-form-group">
            <label htmlFor="userPhone">전화번호</label>
            <input
              type="tel"
              placeholder="Your phone"
              onChange={userPhoneOnChangeHandler}
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="userName">이름</label>
            <input
              type="text"
              placeholder="Your name"
              onChange={userNameOnChangeHandler}
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="userBirth">생년월일8자리</label>
            <input
              type="text"
              placeholder="Your birth"
              maxLength="8"
              onChange={userBirthOnChangeHandler}
            />
          </div>

          <details>
            <summary>
              <div className="toggle-code" onClick={goSignUp}>
                회원가입요청
              </div>
            </summary>
          </details>
        </section>
      </main>
    </div>
  );
};

export default HookUseCallback;
