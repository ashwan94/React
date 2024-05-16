import { useCallback, useState } from "react";

const Login = (props) => {
    // 부모에게서 props 전달 받은 내용 확인
    // 넘어온 값은 close 라는 함수이다
  const { onClose } = props;
  console.log("전달받은 함수 : ", onClose);

  const [toggle, setToggle] = useState(false); // view, login page 전환을 위한 toggle 버튼
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [logoStyle, setLogoStyle] = useState("");

  // 화면 전환
  const changeView = () => {
    setToggle(!toggle);
    setLogoStyle("구글");
  };
  
  // handler
  const emailOnChangeHandler = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  
  const pwOnChangeHandler = useCallback((e) => {
    setPw(e.target.value);
  }, []);

  // localStorage 와 사용자가 입력한 계정 정보 대조해 login 성공/실패 여부 판별
  const doLogin = () => {
    if(email == "" && pw == ""){
        alert("이메일, 비번을 입력해주세요");
        return;
    }
    const loginData = JSON.parse(localStorage.getItem("login"));
    if (loginData.id == email && loginData.pw == pw) {
      onClose({close:true, name : loginData.name});
    } else {
      console.log("올바르지 않은 접근입니다.");
    }
  };

  const dontLogin = () => {
    onClose({close:true});
  }

  // 팝업 첫 화면
  const selectLoginView = () => {
    return (
      <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <div className="space-y-4">
                  <img
                    src="https://tailus.io/sources/blocks/social/preview/images/icon.svg"
                    loading="lazy"
                    className="w-10"
                    alt="tailus logo"
                  />
                  <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                    Sign in to unlock the <br /> best of Tailus.
                  </h2>
                </div>
                <div className="mt-16 grid space-y-4">
                  <button
                    onClick={changeView}
                    className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
         hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  >
                    <div className="relative flex items-center space-x-4 justify-center">
                      <img
                        src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                        className="absolute left-0 w-5"
                        alt="google logo"
                      />
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        Continue with Google
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 로그인 화면
  const loginView = () => {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  {logoStyle} 로그인
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      //   autocomplete="off"
                      id="email"
                      name="email"
                      type="text"
                      onChange={emailOnChangeHandler}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      //   autocomplete="off"
                      onChange={pwOnChangeHandler}
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      onClick={doLogin}
                      className="bg-blue-500 text-white rounded-md me-5 px-2 py-1"
                    >
                        로그인
                    </button>
                    <button
                      onClick={dontLogin}
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      취소
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <>
  {toggle ? loginView() : selectLoginView()}
  </>;
};
export default Login;
