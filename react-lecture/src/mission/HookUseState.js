import { useState } from "react";
import "../css/mission.css";

const HookUseState = () => {
  /* 사용자로부터 할 일 제목, 내용 입력받기 
       입력 받은 제목, 내용을 목록 형태로 출력
    */

  const [todoTitle, setTodoTitle] = useState(""); // 제목 state
  const [todoContent, setTodoContent] = useState(""); // 내용 state
  const [todoList, setTodoList] = useState([]); // todoList state

  // 할일 제목 입력 관련 핸들러
  const todoTitleOnChangeHandler = (e) => {
    setTodoTitle(e.target.value);
  };

  // 할일 내용 입력 관련 핸들러
  const todoContentOnChangeHandler = (e) => {
    setTodoContent(e.target.value);
  };

  // add 버튼 작동
  const addTodo = () => {
    if (todoTitle == "" || todoContent == "") {
      alert("제목, 내용 모두 입력하세요");
      return; // 다음 동작 취소
    }
    setTodoList([
      ...todoList,
      { todoTitle: todoTitle, todoContent: todoContent },
    ]);
    setTodoTitle("");
    setTodoContent("");
  };

  return (
    <>
      <div className="todo-body">
        <div>
          <input
            type="text"
            value={todoTitle}
            onChange={todoTitleOnChangeHandler}
            placeholder="할일 제목"
          />
        </div>
        <div>
          <input
            type="text"
            value={todoContent}
            onChange={todoContentOnChangeHandler}
            placeholder="할일 내용"
          />
        </div>
        <button onClick={addTodo}>add</button>
        <div>todo list</div>
        <ol className="alternating-colors todo-ol">
          {todoList.map((v, i) => {
            return (
              <li key={i} className="todo-li">
                <h4>{v.todoTitle}</h4>
                <div>{v.todoContent}</div>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default HookUseState;
