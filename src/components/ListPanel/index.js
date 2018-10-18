import React from "react";
import ListItem from "./ListItem";
import "./ListPanel.scss";

class ListPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, updateInfoPanel } = this.props;
    const listItems = data.map((d, i) => (
      <ListItem
        d={d}
        key={i}
        updateInfoPanel={this.props.updateInfoPanel.bind(this)}
      />
    ));
    return (
      <div className="list-panel" style={{ ...this.props.style }}>
        <div className="list-panel__chrome">
          <p className="list-panel__chrome__label">All Apprenticeships</p>
        </div>
        <div className="list-panel__scrollbox">{listItems}</div>
      </div>
    );
  }
}

export default ListPanel;
