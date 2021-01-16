import React from "react";
import "./Sprite.css";

class Sprite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ update: true });
  }

  componentDidUpdate() {}

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
</svg>`,
        }}
      />
    );
  }
}

export default Sprite;
