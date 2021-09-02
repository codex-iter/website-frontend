import React, { useState, useEffect } from "react";
import Base from "./Base";
import UserCard from "./userCard";
import "../Styles/members.css";
import Spinner from "./Spinner";
let cord;
let teach;
let memb;

const Members = () => {
  const [loadSpinner, setLoadSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadSpinner(false);
    }, 1000);
  }, []);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(
      "http://codexweb-backend.herokuapp.com/api/getMember"
    );
    const members = await response.json();
    console.log(members, "json");
    setMembers(members);
  };
  const check = () => {
    cord = members.filter((member) => {
      return member.role === "coordinator";
    });
    teach = members.filter((member) => {
      return member.role === "teacher";
    });
    memb = members.filter((member) => {
      return member.role === "member";
    });
    console.log(cord);
  };
  const getMemberData = () => {
    return (
      <div>
        {check()}
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
                <div className="split1-x">
                  {/* <div>
                  <UserCard />
                </div>
                <div>
                  <UserCard />
                </div> */}
                  {teach.map((member) => (
                    <UserCard
                      img={member.githubDP}
                      name={member.name}
                      skill={member.skill}
                      twitterLink={member.twitter}
                      linkedinLink={member.linkedin}
                      githubLink={member.github}
                    />
                  ))}
                </div>
              </div>
            </section>
            <section>
              <div className="container-x">
                <h2>Current Coordinators</h2>
                <div className="splitx">
                  {cord.map((member) => (
                    <UserCard
                      img={member.githubDP}
                      name={member.name}
                      skill={member.skill}
                      twitterLink={member.twitter}
                      linkedinLink={member.linkedin}
                      githubLink={member.github}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section className="member-section">
              <h2 className="class1">Members</h2>
              <div className="split2-x">
                {memb.map((member) => (
                  <UserCard
                    img={member.githubDP}
                    name={member.name}
                    skill={member.skill}
                    twitterLink={member.twitter}
                    linkedinLink={member.linkedin}
                    githubLink={member.github}
                  />
                ))}
              </div>
            </section>
          </div>
        </Base>
      </div>
    );
  };

  return <>{loadSpinner ? <Spinner /> : getMemberData()}</>;
};

export default Members;
