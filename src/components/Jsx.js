import React, { Fragment } from "react";

const JsxAccion = () => {
  const temperatura = 21;
  const saludo = "No Me rindo!";

  return (
    <Fragment>
      <h2>componente JS {saludo}</h2>
      <h4>{temperatura > 20 ? "Calor" : " Frio"}</h4>
    </Fragment>
  );
};

export default JsxAccion;
