import React from "react";
import Base from "./Base";
import UserCard from "./userCard";
import "../Styles/members.css";
const Alumni = () => {
  return (
    <div>
      <Base>
        <section>
          <div className="class-alumni">
            <h2>Our Alumni</h2>
            <div className="splitx">
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </div>
          </div>
        </section>
      </Base>
      <h1>Membres</h1>
    </div>
  );
};

export default Alumni;
