import React from "react";
import "./InfoPanel.scss";

class InfoPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    const { d } = this.props;
    const EmailWrapper = (props) => (<a href={`mailto:${props.email}`}>{props.name}</a>);
    return (
      <div className="info-panel">
        <div className="info-panel__chrome">
          <p className="info-panel__chrome__label">Program Info</p>
        </div>
        <div className="info-panel__title-container">
          <div className={d["Registration"] ? "info-panel__indicator register" : "info-panel__indicator not-register"}></div>
          <h1 className="info-panel__title">{d["name"]}</h1>
          <h2 className="info-panel__subheading">{d["location"]}</h2>
        </div>
        <div className="info-panel__top">
          <div className="info-panel__top__list-item">
            <div className="info-panel__top__list-item__label">
              <span>Occupations</span>
            </div>
            <div className="info-panel__top__list-item__value">
              {d["occupation"]}
            </div>
          </div>
        </div>
        <div className="info-panel__category">
          {Object.keys(d)
            .filter(
              key =>
                key !== "lat" &&
                key !== "lon" &&
                key !== "location" &&
                key !== "name" &&
                key !== "occupation" &&
                key !== "poc_email" &&
                key !== "link"

            )
            .filter(
              key =>
                d[key] !== null
            )
            .map((key, i) => (
              <div className="info-panel__category__list-item" key={i}>
                <div className="info-panel__category__list-item__label">
                  {d[key] ? key : null}
                </div>
                <div className="info-panel__category__list-item__value">
                  {key === "Point of Contact" ? (<EmailWrapper email={d["poc_email"]} name={d["Point of Contact"]} />) : d[key]}
                </div>
              </div>
            ))}
        </div>
        <div className="info-panel__link-container">
          <a className="info-panel__link" href={d["link"]}>Program Website →</a>
        </div>
      </div>
    )
  }
}

export default InfoPanel;
