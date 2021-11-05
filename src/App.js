import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import LivePlayer from "./livePlayer";
import { Provider } from "react-redux";
import API from "./controllers/api";
import { createStore, combineReducers } from "redux";
import { reducer as jPlayers } from "react-jplayer";
// Styles the jPlayer to look nice
import "react-jplayer/src/less/skins/sleek.less";
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import "react-jplayer/src/less/controls/iconControls.less";

const store = createStore(combineReducers({ jPlayers }));

const App = () => {
  let [schedules, setSchedules] = useState([]);
  let [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const fetchschedules = async () => {
    try {
      const res = await API.get("/getSchedules", config);
      setSchedules(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const formatTime = (timeString) => {
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 || H === 24 ? " AM" : " PM";
    return h + timeString.substr(2, 3) + ampm;
  };

  useEffect(() => {
    (async () => {
      await fetchschedules();
      setLoading(false);
    })().catch(err => {
      console.error(err);
    });
  });

  return (
    <div className="App">
      <div className="container-fluid px-0  bg-white">
        <header className=" container d-flex flex-wrap justify-content-center py-2 mb-2 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <img
              alt="banner"
              src="https://apptest.elevationng.org/pistisnetwork2021/wp-content/uploads/2021/10/The-Pistis-Network-LOGOb-300H-min.png"
              height={45}
            />
          </a>
        </header>
      </div>

      <div className="d-flex align-content-center">
        <Container className="py-4">
          <div className="text-center w-100 mt-5 mb-4">
            <h2 className="h1 text-white display-3"> Schedule </h2>
          </div>
          <div className="d-flex justify-content-center">
            {loading ? (
              <div className="py-5">
                <div class="spinner-border text-light" style={{ width : "5rem", height: "5rem" }} role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <h2 className="mt-3 text-light"> Loading .....</h2>
              </div>
            ) : (
              <div className="col-lg-8" style={{ opacity: "0.9" }}>
                <Tab.Container
                  id="left-tabs-example"
                  className="mx-5 shadow-lg rounded-3 bg-white"
                  defaultActiveKey="0"
                >
                  <Row className="g-0 bg-white shadow-lg rounded-3 ">
                    <Col
                      sm={12}
                      lg={3}
                      className=""
                      style={{ borderRight: "1px solid #e2e2e2" }}
                    >
                      <Nav variant="pills" className="flex-column">
                        {Object.keys(schedules).map((key, index) => (
                          <Nav.Item key={index}>
                            <Nav.Link eventKey={index} className="py-4">
                              {" "}
                              {new Date(key).toDateString()}{" "}
                            </Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>
                    </Col>
                    <Col sm={9} className="py-3 px-3 px-lg-4 py-lg-5">
                      <Tab.Content>
                        {Object.keys(schedules).map((key, index) => (
                          <Tab.Pane key={index} eventKey={index}>
                            {schedules[key].map((item, index) => (
                              <div className="row my-3" key={index}>
                                <div className="col-4 text-start">
                                  <h6>
                                    {formatTime(item.startTime)} -
                                    {formatTime(item.endTime)}
                                  </h6>
                                </div>
                                <div className="col-8 text-start">
                                  <h5 className="fw-bold text-uppercase">
                                    {item.title}
                                  </h5>
                                </div>
                              </div>
                            ))}
                          </Tab.Pane>
                        ))}
                        <Tab.Pane eventKey="second">
                          <h2> second</h2>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            )}
          </div>
        </Container>
      </div>
      <Provider store={store}>
        <LivePlayer />
      </Provider>
    </div>
  );
};

export default App;
