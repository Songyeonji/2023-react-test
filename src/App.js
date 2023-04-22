import NoRecord from "./NoRecord";

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    form.name.value = form.name.value.trim();

    if (form.name.value.length == 0) {
      alert("이름을 입력해주세요.");
      form.name.focus();
      return;
    }

    form.age.value = form.age.value.trim();

    if (form.age.value.length == 0) {
      alert("나이를 입력해주세요.");
      form.age.focus();
      return;
    }

    const name = form.name.value;
    const age = form.age.valueAsNumber;

    alert(`이름 : ${name}, 나이 : ${age}`);

    form.name.value = "";
    form.age.value = "";

    form.name.focus();
  };

  return (
    <>
      <NoRecord />
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="이름을 입력해주세요." />
        <br />
        <input type="number" name="age" placeholder="나이을 입력해주세요." />
        <br />
        <input type="submit" value="전송" />
      </form>
    </>
  );
}