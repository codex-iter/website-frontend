import React, { useState, useEffect } from "react";

import Base from "../layouts/Base";
import UserCard from "../components/UserCard";
import Spinner from "../components/Spinner";
import "../styles/members.css";

const Alumni = () => {
  const [loadSpinner, setLoadSpinner] = useState(true);
  const [alumnis, setAlumnis] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoadSpinner(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(
      "https://codexweb-backend.herokuapp.com/api/getAlumni"
    );
    const alumnis = await response.json();
    console.log(alumnis, "json");
    setAlumnis(alumnis);
  };
  const getAlumniData = () => {
    return (
      <div>
        <Base>
          <section>
            <div className="class-alumni">
              <h2>Our Alumni</h2>
              <div className="splitx">
                {alumnis.map((alumni) => (
                  <UserCard
                    img={alumni.githubDP}
                    name={alumni.name}
                    skill={alumni.skill}
                    twitterLink={alumni.twitter}
                    linkedinLink={alumni.linkedin}
                    githubLink={alumni.github}
                  />
                ))}
              </div>
            </div>
          </section>
        </Base>
      </div>
    );
  };
  return <>{loadSpinner ? <Spinner /> : getAlumniData()}</>;
};

export default Alumni;
