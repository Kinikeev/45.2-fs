import React from "react";
import "./profileCard.css";

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <img
        className="avatar"
        src={user.avatar}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <h2 className="name">
        {user.firstName} {user.lastName}
      </h2>
      <p className="occupation">{user.occupation}</p>
      <div className="hobbies">
        <h3>Хобби:</h3>
        <ul>
          {user.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
