import React from "react";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <button
    type="button"
    onClick={firebase.doSignOut}
    className="button is-small button is-info is-outlined"
  >
    Sign Out
  </button>
);

export default withRouter(withFirebase(SignOutButton));
