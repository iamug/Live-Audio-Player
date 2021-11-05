import React, { useEffect, useState }from "react";
import JPlayer, { initializeOptions, Gui, Audio, Title } from "react-jplayer";
import { Mute, Play, VolumeBar, CurrentTime, BrowserUnsupported } from "react-jplayer";
import API from "./controllers/api";


const LivePlayer = () => {

let [liveTitle, setLiveTitle] = useState(false);
let [liveURL, setLiveURL] = useState(false);
let [loading, setLoading] = useState(true);

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const fetchliveurl = async () => {
  try {
    const res = await API.get("/getOptions/LIVE_URL", config);
    setLiveURL(res.data.options[0].value)
  } catch (err) {
    console.log(err);
    return false;
  }
};

const fetchlivetitle = async () => {
  try {
    const res = await API.get("/getOptions/LIVE_TITLE", config);
    setLiveTitle(res.data.options[0].value)
  } catch (err) {
    console.log(err);
    return false;
  }
};

useEffect(() => {
  (async () => {
    await fetchliveurl();
    await fetchlivetitle();
    setLoading(false);
  })().catch(err => {
    console.error(err);
  });
});

const defaultOptions = {
  id: "LivePlayer",
  keyEnabled: true,
  verticalVolume: true,
  media: {
    title: liveTitle,
    sources: {
      mp3: liveURL,
    },
  },
};

initializeOptions(defaultOptions);

  return (
      !loading && (
  <JPlayer id={defaultOptions.id} className="jp-sleek">
    <Audio />
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Play>
          <i className="fa fa-2x py-3 me-4">{/* Icon set in css */}</i>
        </Play>
        <div className="jp-progress">
          <CurrentTime />
        </div>
        <div className="jp-volume-container">
          <Mute>
            <i className="fa fa-2x py-3 mx-3">{/* Icon set in css */}</i>
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <div className="jp-title-container">
         <h3> <Title /> </h3> 
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlayer>
  )
);
};

export default LivePlayer;
