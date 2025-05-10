// на место props придет объект с переданными в родителе
// данными

import MyButton from "../myButton/MyButton";

// по соответствующим ключам
function UserCard({ name, age, lastname }) {
  // если не знать синтаксис деструктуризации и хочется
  // разделить объект на много переменных со значениями
  // по соответствующим ключам - нужно писать много строк
  // кода.
  // const name = props.name
  // const age = props.age

  // функция обработчик
  const handleClick = () => {
    alert(`Hello, ${name}`);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <p>Lastname: {lastname}</p>
      <p>Age: {age}</p>
      {/* <MyButton text={"Choose " + props.name} /> */}
      <MyButton func={handleClick} text={`Choose ${name}🏀 ${lastname}`} />
    </div>
  );
}
export default UserCard;
