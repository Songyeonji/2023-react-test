import React, { useState, useRef } from "react";

function TodoListItem({ todosState, todo, index }) {
  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(todo.content);
  const editedContentInputRef = useRef(null);

  const removeTodo = () => {
    todosState.removeTodo(index);
  };

  const showEdit = () => {
    setEditMode(true);
  };

  const commitEdit = () => {
    if (editedContent.trim().length == 0) {
      alert("할 일을 입력해주세요.");
      editedContentInputRef.current.focus();
      return;
    }

    todosState.modifyTodo(index, editedContent.trim());

    setEditMode(false);
  };

  const cancelEdit = () => {
    setEditMode(false);
    setEditedContent(todo.content);
  };

  return (
    <li key={index}>
      {todo.id}
      &nbsp;
      {todo.regDate}
      {editMode || (
        <>
          {todo.content}
          &nbsp;
          <button onClick={showEdit}>수정</button>
        </>
      )}
      {editMode && (
        <>
          <input
            type="text"
            placeholder="할 일을 입력해주세요."
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={commitEdit}>수정완료</button>
          <button onClick={cancelEdit}>수정취소</button>
        </>
      )}
      <button onClick={removeTodo}>삭제</button>
    </li>
  );
}

function TodoList({ todosState }) {
  return (
    <ul>
      {todosState.todos.map((todo, index) => (
        <TodoListItem
          todosState={todosState}
          kye={todo.id}
          todo={todo}
          index={index}
        />
      ))}
    </ul>
  );
}

function NewTodoForm({ todosState }) {
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.content.value = form.content.value.trim();

    if (form.content.value.length == 0) {
      alert("할 일을 입력해주세요.");
      form.content.focus();
      return;
    }

    todosState.addTodo(form.content.value);
    form.content.value = "";
    form.content.focus();
  };


  return (
    <>
        <form onSubmit={onSubmit}>
        <input
          autoComplete="off"
          type="text"
          name="content"
          placeholder="할 일을 입력해주세요."
        />
        <input type="submit" value="추가" />
        <input type="reset" value="취소" />
      </form>
    </>
  );
}

function TodoApp({ todosState }) {
  return (
    <>
      <NewTodoForm todosState={todosState} />
      <hr />
      <TodoList todosState={todosState} />
    </>
  );
}

function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);
  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date()),
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, _index) =>
      _index != index ? todo : { ...todo, content: newContent }
    );
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    modifyTodo,
    removeTodo,
  };
}
function App() {
  const todosState = useTodosState();
  return (
    <>
      <TodoApp todosState={todosState} />
    </>
  );
}

export default App;

// 날짜 객체를 입력받아서 문장 (yyyy-mm-dd hh:mm:ss) 형태로 반환.
function dateToStr(d) {
  const pad = (n) => {
    return n < 10 ? "0" + n : n;
  };

  return (
    d.getFullYear() +
    "-" +
    pad(d.getMonth() + 1) +
    "-" +
    pad(d.getDate()) +
    " " +
    pad(d.getHours()) +
    ":" +
    pad(d.getMinutes()) +
    ":" +
    pad(d.getSeconds())
  );
}