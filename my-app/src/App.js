import logo from './logo.svg';
import './App.css';
import img from './img/bg.jpg';

function App() {
  return (
    <div className="App">
      <section className="bg-dark">
        <center class="heading">
          <h1>Events Organized By Our Community</h1>
        </center>
        <div className="container">
          <div className="split">
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
            <div>
              <img src={img}
                id="image"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-primary">
        <div class="container">
          <div class="split">
            <div>
              <img src={img}
                id="image"
                alt=""
              />
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

      <section className="bg-dark">
        <div className="container">
          <div className="split">
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
              <img src={img}
                id="image"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-primary">
        <div class="container">
          <div class="split">
            <div>
              <img src={img}
                id="image"
                alt=""
              />
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

    </div>
  );
}

export default App;
