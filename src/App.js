import React, { useState, useRef, useEffect } from "react";
import { AppBar, Button, TextField, Toolbar, Chip } from "@mui/material";


function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date())
    };

    setTodos((todos) => [newTodo, ...todos]);
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
    removeTodo
  };
}

function App() {
  const todosState = useTodosState();
  
  useEffect(() => {
    todosState.addTodo('운동\n스트레칭\n유산소\n상체\n하체\볼륨 트레이닝');
    todosState.addTodo('명상');
    todosState.addTodo('공부');
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.content.value = form.content.value.trim();

    if (form.content.value.length == 0) {
      alert("할일을 입력해주세요.");
      form.content.focus();

      return;
    }

    todosState.addTodo(form.content.value);
    form.content.value = "";
    form.content.focus();
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <div className="flex-1"></div>
          <span className="font-bold">YEON JI NOTE</span>
          <div className="flex-1"></div>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <form onSubmit={onSubmit} className="flex flex-col mt-4 px-4 gap-2">
        <TextField
          minRows={3}
          maxRows={10}
          multiline
          autoComplete="off"
          name="content"
          label="할일을 입력해주세요."
          variant="outlined"
        />

        <Button type="submit" variant="contained">추가</Button>
      </form>
      <div className="mt-4 px-4">
        <ul>
          {todosState.todos.map((todo) => (
            <li key={todo.id} className="mt-10">
              <div className="flex gap-2">
                <Chip label={`번호 : ${todo.id}`} variant="outlined" className="!pt-1" />
                <Chip label={todo.regDate} color="primary" variant="outlined"  className="!pt-1" />
              </div>
              <div className="mt-4 p-10 shadow rounded-[20px] whitespace-pre-wrap leading-relaxed hover:text-[color:var(--mui-color-primary-main)]">
                {todo.content}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const muiThemePaletteKeys = [
  "background",
  "common",
  "error",
  "grey",
  "info",
  "primary",
  "secondary",
  "success",
  "text",
  "warning",
];

  
export default App;
// 유틸리티

// 날짜 객체 입력받아서 문장(yyyy-mm-dd hh:mm:ss)으로 반환한다.
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