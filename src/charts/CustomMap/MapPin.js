import React from "react";

class MapPin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  handleMouseEnter(e) {
    const isActive = true;
    const d = this.props.d;
    this.setState({
      isActive: true
    });
    this.props.updateInfoPanel(d, d["lat"], d["lon"], true);
  }

  handleMouseLeave() {
    const isActive = false;
    this.setState({ isActive });
  }

  handleClick = e => {
    const { d } = this.props;
    this.props.updateInfoPanel(d, d["lat"], d["lon"], true);
  };

  render() {
    return (
      <circle
        cx={this.props.x}
        cy={this.props.y}
        r={5}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onClick={this.handleClick.bind(this)}
        fill={this.props.d["Registration"] ? "#25D7B0" : "#F5A623"}
        strokeWidth={
          this.state.isActive ||
          (this.props.activeLat === this.props.d["lat"] &&
            this.props.activeLon === this.props.d["lon"])
            ? 2
            : 1
        }
        stroke="#fff"
      />
    );
  }
}

export default MapPin;
