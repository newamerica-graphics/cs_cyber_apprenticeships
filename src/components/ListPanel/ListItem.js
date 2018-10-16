import React from "react";
import "./ListPanel.scss";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    const { d } = this.props;
    this.props.updateInfoPanel(d);
  }

  render() {
    const { d } = this.props;

    return (
      <div className="list-panel__list-item">
        <div className={d["Registration"] ? "list-panel__indicator register" : "list-panel__indicator not-register"}></div>
        <h1 className="list-panel__title">{d["name"]}</h1>
        <h2 className="list-panel__subheading">{d["location"]}</h2>
        {d["Active, paid apprentices?"] ? <p className="list-panel__active-label">✓ Active, paid apprentices</p> : null}
        <a className="list-panel__link" onClick={this.handleClick.bind(this)} >More Info →</a>
      </div>
    )
  }
}

export default ListItem;
