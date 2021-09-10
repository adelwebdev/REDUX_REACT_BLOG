import React from "react";
import { useSelector } from "react-redux";

//partie User (component) pr inserer une logique d'utilisateur (pseudo, photo, âge, nbr de likes)

const User = () => {
  const user = useSelector((state) => state.userReducer);

  return (
    <div className="user-container">
      <div className="user">
        <h3>{user[0].pseudo}</h3>
        <img src="https://thispersondoesnotexist.com/image" alt="" />
        <p>Age : 35 ans</p>
        <p>Like(s) : 0</p>
      </div>
    </div>
  );
};

export default User;
