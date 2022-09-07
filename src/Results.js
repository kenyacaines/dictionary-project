import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Results(props) {
  
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <span>
          
        </span>
        {props.results.phonetics
          .filter((phonetic) => phonetic.audio !== "")
          .map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
                <br />
                {props.results.phonetics.text}
              </div>
            );
          })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
