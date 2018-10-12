import React from "react";

class MapPin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  handleMouseEnter(e) {
    const isActive = true;
    const d = this.props.d;
    const mousePos = [e.pageX, e.pageY];
    this.setState({
      isActive: true
    });
    this.props.showTooltip(isActive, d, mousePos);
  }

  handleMouseLeave() {
    const isActive = false;
    this.setState({ isActive });
  }

  render() {
    return (
      <circle
        cx={this.props.x}
        cy={this.props.y}
        r="5"
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        fill={this.props.d["Registration"] ? "#25D7B0" : "#F5A623"}
        strokeWidth={this.state.isActive ? 2 : 1}
        stroke="#F9F6F6"
      />
    );
  }
}

export default MapPin;
