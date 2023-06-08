import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SignInForm } from "./Components/SignInForm/SignInForm";
function App() {
  return (
    <React.Fragment>
      <div className="container">
        <SignInForm />
      </div>
    </React.Fragment>
  );
}

export default App;
