import "./index.scss";
import ReactDOM from "react-dom";
import CustomMap from "./charts/CustomMap";

let queue = [];
let data = null;

const settings = {
  apprenticeshipMap: el => {
    ReactDOM.render(
      <CustomMap
        geometry="us"
        width={900}
        height={600}
        data={data.data}
        // title={data.meta[0].title}
      />,
      el
    );
  }
};

fetch(
  "http://na-data-projects.s3.amazonaws.com/data/cs/apprenticeships_database.json"
)
  .then(response => response.json())
  .then(_data => {
    data = _data;
    for (let i = 0; i < queue.length; i++) queue[i]();
  });

window.renderDataViz = function(el) {
  let id = el.getAttribute("id");
  let chart = settings[id];
  if (!chart) return;

  if (data) {
    chart(el);
  } else {
    queue.push(() => chart(el));
  }
};
