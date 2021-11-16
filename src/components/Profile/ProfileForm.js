import { useRef, useContext } from "react";
import { useNavigate } from "react-router";

import AuthContext from "../../store/auth-context";

import classes from "./ProfileForm.module.css";

export default function ProfileForm() {
  const navigate = useNavigate();

  const newPasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAjdtaeLEI3XV_puClocCr-OoyOASQV-8Y";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // assumption: Always succeeds
      console.log("response: ", res);
      navigate('/');
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          id="password"
          required
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}
