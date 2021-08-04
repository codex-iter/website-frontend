
import bg from "../Assets/Images/bg.jpg";
import Styles from "../Styles/Event.css";
import Base from "./Base";
import EventSilder from "./EventSilder";
function Event() {
    return (
        <Base>
            <section className="bgevent">
                <div class="heading1">
                    <h1>Events Organized By Our Community</h1>
                </div>
                <div className="container-y">
                    <div className="split-y">
                        <div className="card_content">
                            <h1>Event 1</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                <p><b class="organizers">Organizers</b><br>
                                </br>
                                    Benito Noboa,Benito Noboa,Benito Noboa
                                </p>
                            </p>
                        </div>

                        <div >

                            <EventSilder key={1}>

                            </EventSilder>

                        </div>
                    </div>
                </div>
            </section>

            <section class="bgeevent1">
                <div class="container-y">
                    <div class="split-y">
                        <div>
                            <EventSilder key={2}>

                            </EventSilder>
                        </div>
                        <div className="card_content">
                            <h1>Event 2</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                <p><b class="organizers">Organizers</b><br>
                                </br>
                                    Benito Noboa,Benito Noboa,Benito Noboa
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bgevent">
                <div className="container-y">
                    <div className="split-y">
                        <div className="card_content">
                            <h1>Event 3</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                <p><b class="organizers">Organizers</b><br>
                                </br>
                                    Benito Noboa,Benito Noboa,Benito Noboa
                                </p>
                            </p>
                        </div>
                        <div>
                            <EventSilder key={3}></EventSilder>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bgeevent1">
                <div class="container-y">
                    <div class="split-y">
                        <div>
                            <EventSilder key={4}></EventSilder>
                        </div>
                        <div className="card_content">
                            <h1>Event 4</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                <p><b class="organizers">Organizers</b><br>
                                </br>
                                    Benito Noboa,Benito Noboa,Benito Noboa
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