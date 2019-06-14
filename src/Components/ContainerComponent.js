import React from 'react';
import Signin from "../SignIn/SignIn";
import "./ContainerComponent.css";
import Signup from "../SignUp/SignUp"

function Maincomponent() {
  return (
    <div className="container" id="container">
     
      {/* <Signin/> */}
      <Signup/>
    </div>
  );
}

export default Maincomponent;