import React, { useState, useEffect } from "react";
import bg from "../Assets/Images/bg.jpg";
import Styles from "../Styles/Event.css";
import Base from "./Base";
import EventSilder from "./EventSilder";
/*events page*/
function Event() {
  const [photos, setPhotos] = useState({});
  const getEventsData = async () => {
    const response = await fetch(
      "https://codexweb-backend.herokuapp.com/api/getEvents"
    );
    const data = await response.json();
    console.log("data", data[0].images);
    setPhotos(data);
    console.log("Photos", photos[0].description);
  };
  useEffect(() => {
    getEventsData();
  }, []);
  return (
    <Base>
      <section className='bgevent'>
        <div class='heading1'>
          <h1>Events Organized By Our Community</h1>
        </div>
        <div className='container-y'>
          <div className='split-y'>
            <div className='card_content'>
              <h1>Event 1</h1>
              <p>
                {photos[0].description}
                <p>
                  <b class='organizers'>Organizers</b>
                  <br></br>
                  {photos[0].organizers.map((o, i) => (
                    <span>{o} ,</span>
                  ))}
                </p>
              </p>
            </div>
            <div>
              <EventSilder photos={photos}></EventSilder>
            </div>
          </div>
        </div>
      </section>

      <section class='bgeevent1'>
        <div class='container-y'>
          <div class='split-y'>
            <div>
              <EventSilder photos={photos}></EventSilder>
            </div>
            <div className='card_content'>
              <h1>Event 2</h1>
              <p>
                {photos[0].description}
                <p>
                  <b class='organizers'>Organizers</b>
                  <br></br>
                  {photos[0].organizers.map((o, i) => (
                    <span>{o} ,</span>
                  ))}
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bgevent'>
        <div className='container-y'>
          <div className='split-y'>
            <div className='card_content'>
              <h1>Event 3</h1>
              <p>
                {photos[0].description}
                <p>
                  <b class='organizers'>Organizers</b>
                  <br></br>
                  {photos[0].organizers.map((o, i) => (
                    <span>{o} ,</span>
                  ))}
                </p>
              </p>
            </div>
            <div>
              <EventSilder photos={photos}></EventSilder>
            </div>
          </div>
        </div>
      </section>

      <section class='bgeevent1'>
        <div class='container-y'>
          <div class='split-y'>
            <div>
              <EventSilder photos={photos}></EventSilder>
            </div>
            <div className='card_content'>
              <h1>Event 4</h1>
              <p>
                {photos[0].description}
                <p>
                  <b class='organizers'>Organizers</b>
                  <br></br>
                  {photos[0].organizers.map((o, i) => (
                    <span>{o} ,</span>
                  ))}
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}

export default Event;
