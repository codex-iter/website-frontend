import React from "react";
import Base from "./Base";
import UserCard from "./userCard";
import "../Styles/members.css";
const Members = () => {
  return (
    <div>
      <Base>
        <div>
          <section>
            <div className="container-x">
              <div className="container1-x">
                <h1>Meet our community</h1>
                <h2>Teacher coordinators</h2>
              </div>
            </div>
          </section>
          <section>
            <div className="container-x">
              <div className="split1">
                <div>
                  <UserCard />
                </div>
                <div>
                  <UserCard />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container-x">
              <h2>Current Coordinators</h2>
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

          <section>
            <h2 className="class1">Members</h2>
            <div className="split2-x">
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
              <UserCard />
            </div>
          </section>
        </div>
      </Base>
    </div>
  );
};

export default Members;
