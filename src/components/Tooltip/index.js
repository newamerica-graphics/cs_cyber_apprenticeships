import React from "react";
import "./Tooltip.scss";

const body = document.querySelector("body");

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isActive, d, tooltipTemplate } = this.props;

    return (
      <div
        className={isActive ? "tooltip" : "tooltip hidden"}
        ref={tooltip => (this.tooltip = tooltip)}
      >
        <div className="tooltip__content-container">{tooltipTemplate(d)}</div>
      </div>
    );
  }
}

export default Tooltip;
