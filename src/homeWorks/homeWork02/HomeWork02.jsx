import React from "react";
import ProfileCard from "../../components/profileCard/ProfileCard";

const users = [
  {
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    firstName: "Иван",
    lastName: "Иванов",
    occupation: "Фронтенд-разработчик",
    hobbies: ["Чтение", "Путешествия", "Плавание"],
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    firstName: "Анна",
    lastName: "Смирнова",
    occupation: "UX-дизайнер",
    hobbies: ["Рисование", "Йога", "Кино"],
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    firstName: "Дмитрий",
    lastName: "Козлов",
    occupation: "Инженер-программист",
    hobbies: ["Игры", "Кулинария", "Велоспорт"],
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    firstName: "Мария",
    lastName: "Петрова",
    occupation: "Маркетолог",
    hobbies: ["Фотография", "Путешествия", "Психология"],
  },
];

const Homework02 = () => {
  return (
    <>
      {users.map((user, index) => (
        <ProfileCard key={index} user={user} />
      ))}
    </>
  );
};

export default Homework02;
