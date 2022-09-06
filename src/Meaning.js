import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning (props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span>{definition.definition}</span>
            <br />
            <span>
              <em>{definition.example}</em>
            </span>
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
