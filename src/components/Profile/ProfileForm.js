import React from "react";

import classes from "./ProfileForm.module.css";

export default function ProfileForm() {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="password">New Password</label>
        <input type="password" id="password" required />
      </div>
      <div className={classes.action}>
          <button>Change Password</button>
      </div>
    </form>
  );
}
