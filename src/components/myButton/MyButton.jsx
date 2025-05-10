// пример отдельного компонента кнопки
// экспорт по умолчанию написан перед
// объявлением функции

export default function MyButton(props) {
  return <button onClick={props.func}>{props.text}</button>;
}
