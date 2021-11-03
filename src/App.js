import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Tab, Tabs } from "react-bootstrap";
import LivePlayer from "./livePlayer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as jPlayers } from "react-jplayer";

// Styles the jPlayer to look nice
import "react-jplayer/src/less/skins/sleek.less";
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import "react-jplayer/src/less/controls/iconControls.less";

const store = createStore(combineReducers({ jPlayers }));

function App() {
  return (
    <div className="App">
      <Container className="mt-5 pt-5">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            <h2>Tabsss</h2>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <h2>Profile</h2>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <h2>Contact</h2>
          </Tab>
        </Tabs>

        <br />
        <br />
        <br />
        <div className="mt-5">
          <div class="d-flex align-items-start">
            <div class="col-3">
              <ul
                className="nav nav-pills nav-justified flex-column mb-3 nav-tabs"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link py-4 border active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link py-4  border"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Profile
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link py-4  border"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className=" col-auto p-5 tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <h1>Hello Home</h1>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <h1>Hello Profile</h1>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <h1>Hello Contact</h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Provider store={store}>
        <LivePlayer />
      </Provider>
    </div>
  );
}

export default App;
