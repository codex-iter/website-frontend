import React, { useState, useEffect } from "react";
import "../styles/Event.css";
import Base from "../layouts/Base";
import EventData from "../components/events/EventData";
import EventData2 from "../components/events/EventData2";
import Spinner from "../components/Spinner";

function Event() {
  const [state, setState] = useState({
    eventData: [],
    loading: true,
    error: false,
  });
  const getEventsData = async () => {
    try {
      const response = await fetch(
        "https://codexweb-backend.herokuapp.com/api/getEvents"
      );
      const data = await response.json();
      setState({ eventData: data && data, loading: false, error: false });
      // console.log("Photos", photos[0].description);
    } catch (error) {
      console.log(error);
      setState({ eventData: [], loading: false, error: error });
    }
  };

  useEffect(() => {
    getEventsData();
  }, []);

  if (state.loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <Base>
      {state.eventData && (
        <>
          <section className="bgevent">
            {" "}
            <div className="heading1">
              <h1>Events Organized By Our Community</h1>
            </div>
          </section>
          <EventData
            description={state.eventData[0].description}
            organizers={state.eventData[0].organizers}
            images={state.eventData[0].images}
          >
            <h1>Event 1</h1>
          </EventData>
          <EventData2
            description={state.eventData[0].description}
            organizers={state.eventData[0].organizers}
            images={state.eventData[0].images}
          >
            {" "}
            <h1>Event 2</h1>
          </EventData2>
          <EventData
            description={state.eventData[0].description}
            organizers={state.eventData[0].organizers}
            images={state.eventData[0].images}
          >
            <h1>Event 3</h1>
          </EventData>
          <EventData2
            description={state.eventData[0].description}
            organizers={state.eventData[0].organizers}
            images={state.eventData[0].images}
          >
            {" "}
            <h1>Event 4</h1>
          </EventData2>
        </>
      )}
    </Base>
  );
}

export default Event;
