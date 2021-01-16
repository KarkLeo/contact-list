import React from "react";
import "./Sprite.css";

class Sprite extends React.Component {
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
<svg width="0" height="0" class="hidden">
<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="delete">
  <path d="M0 0h24v24H0z" fill="none"></path>
  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
 </symbol>
<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check">
  <path d="M0 0h24v24H0z" fill="none"></path>
  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</symbol>
 <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="uncheck">
  <path fill="none" d="M0 0h24v24H0z"></path>
  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path>
</symbol>
</svg>`,
        }}
      />
    );
  }
}

export default Sprite;
