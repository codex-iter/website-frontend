import React from "react";
import EventSilder from "../EventSilder";

const EventData = (props) => {
  console.log("ed1", props);
  const { description, organizers, images, children } = props;

  return (
    <div>
      <section className="bgevent">
        <div className="container-y">
          <div className="split-y">
            <div className="card_content">
              {children}
              <p>
                {description}
                <p>
                  <b
                    className="organizers"
                    style={{ textDecoration: "underline", margin: "10px 0px" }}
                  >
                    Organizers
                  </b>
                  <br></br>
                  {organizers.map((o, i) => (
                    <span key={i}>{o} </span>
                  ))}
                </p>
              </p>
            </div>
            <div>
              <EventSilder images={images}></EventSilder>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventData;
