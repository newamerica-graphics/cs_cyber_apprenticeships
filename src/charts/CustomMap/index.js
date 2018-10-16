import React from "react";
import ChartContainer from "../../components/ChartContainer";
import BaseMap from "../../components/BaseMap";
import MapPin from "./MapPin";
import InfoPanel from "../../components/InfoPanel";
import ListPanel from "../../components/ListPanel";

class CustomMap extends React.Component {
  constructor(props) {
    super(props);
    // set initial state to empty values, will update once the BaseMap component fetches topojson data
    this.state = {
      projection: () => [0, 0],
      d: this.props.data[0]
    };
  }

  projectionInit(projection) {
    this.setState({ projection });
  }

  updateInfoPanel(d) {
    this.setState({
      d
    });
  }

  render() {
    const lon = this.props.lon || "lon";
    const lat = this.props.lat || "lat";
    const {
      data,
      title,
      subtitle,
      source,
      geometry,
      width,
      height
    } = this.props;
    const { projection, d } = this.state;
    return (
      <ChartContainer title={title} subtitle={subtitle} source={source}>
        <div className="chart__map"><BaseMap
          geometry={geometry}
          width={width}
          height={height}
          projectionInit={this.projectionInit.bind(this)}
        >
          {data.map((d, i) =>
            {
              return (
                <MapPin
                  x={projection([+d[lon], +d[lat]])[0]}
                  y={projection([+d[lon], +d[lat]])[1]}
                  d={d}
                  key={i}
                  updateInfoPanel={this.updateInfoPanel.bind(this)}
                />
          )})}
        </BaseMap></div>
        <div className="chart__panel">
            <InfoPanel
              d={d}
            />
            <ListPanel
              data={data}
              updateInfoPanel={this.updateInfoPanel.bind(this)}
            />
        </div>
      </ChartContainer>
    );
  }
}
export default CustomMap;
