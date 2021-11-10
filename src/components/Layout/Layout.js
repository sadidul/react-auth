import React from "react";
import Mainnavigation from "./Mainnavigation";

export default function Layout(props) {
  return (
    <>
      <Mainnavigation />
      <main>{props.children}</main>
    </>
  );
}
