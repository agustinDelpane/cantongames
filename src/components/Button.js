import React from "react";

export default function Button(props) {
  let { accion, textoBut } = props;
  return <button onClick={accion}>{textoBut}</button>;
}