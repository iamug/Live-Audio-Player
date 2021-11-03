import React from "react";
import JPlayer, {
  initializeOptions,
  Gui,
  Audio,
  Title,
  FullScreen,
  Mute,
  Play,
  VolumeBar,
  CurrentTime,
  BrowserUnsupported,
} from "react-jplayer";

const defaultOptions = {
  id: "LivePlayer",
  keyEnabled: true,
  verticalVolume: true,
  media: {
    title: "ABC Jazz",
    sources: {
      mp3: "http://listen.radionomy.com/abc-jazz",
    },
  },
};

initializeOptions(defaultOptions);

const LivePlayer = () => (
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
        <FullScreen>
          <i className="fa fa-expand fa-2x py-3 mx-3" />
        </FullScreen>
        <div className="jp-title-container">
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlayer>
);

export default LivePlayer;
