import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import formikForm from "./components/formikForm";

function App() {
  return (
    <div style={{ margin: "2rem" }}>
      <RegistrationForm />
      <hr />
      <formikForm />
    </div>
  );
}

export default App;
