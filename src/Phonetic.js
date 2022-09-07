import React from "react";


import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="audio-player">
        <ReactAudioPlayer
          src={props.phonetic.audio}
          autoPlay={false}
          controls
        />
        <audio src={props.phonetic.audio} />
      </div>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
