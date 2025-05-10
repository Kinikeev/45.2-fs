import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";

function Lesson03() {
  return (
    <div>
      <h2>React Props🎡👩‍👧‍👦</h2>
      <p>
        Props используются для передачи данных от родительских компонентов
        дочерним компонентам. Это один из основных механизмов передачи данных в
        React
      </p>
      {/* вызов компонента UserCard с разными данными */}
      <MyButton text="Click me!" />
      <MyButton text="off" />
      <MyButton text="on" />
      {/* вызов компонента UserCard с разными данными */}
      <UserCard name={"Bilbo"} lastname={"Baggins"} age={45} />
      <UserCard name={"Gendalf"} lastname={"White"} age={2000} />
      <UserCard name={"Gimli"} lastname={"Dwarfson"} age={90} />
    </div>
  );
}

export default Lesson03;
