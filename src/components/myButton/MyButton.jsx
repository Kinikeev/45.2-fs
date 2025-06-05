// пример отдельного компонента кнопки
// экспорт по умолчанию написан перед
// объявлением функции

// простая кнопка
export default function MyButton() {
  return <button>Click me!</button>;
}

// функциональная рабочая кнопка
// export default function MyButton(props) {
//   return <button onClick={props.func}>{props.text}</button>;
// }
