import './index.scss';
import ReactDOM from 'react-dom';
import PindropMap from './charts/PindropMap';

let queue = [];
let data = null;

const tooltipTemplate = d => (
    <div>
      <div className="tooltip__chrome">
        <p className="tooltip__chrome__label">Program Info</p>
      </div>
      <div className="tooltip__title-container">
        <div className={d["Registration"] ? "tooltip__indicator register" : "tooltip__indicator not-register"}></div>
        <h1 className="tooltip__title">{d["name"]}</h1>
        <h2 className="tooltip__subheading">{d["location"]}</h2>
      </div>
      <div className="tooltip__top">
        <div className="tooltip__top__list-item">
          <div className="tooltip__top__list-item__label">
            <span>Occupations</span>
          </div>
          <div className="tooltip__top__list-item__value">
            {d["occupation"]}
          </div>
        </div>
      </div>
      <div className="tooltip__category">
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
            <div className="tooltip__category__list-item" key={i}>
              <div className="tooltip__category__list-item__label">
                {d[key] ? key : null}
              </div>
              <div className="tooltip__category__list-item__value">
                {key === "Point of Contact" ? (<EmailWrapper email={d["poc_email"]} name={d["Point of Contact"]} />) : d[key]}
              </div>
            </div>
          ))}
      </div>
      <div className="tooltip__link-container">
        <a className="tooltip__link" href={d["link"]}>Program Website →</a>
      </div>
    </div>
  );

const EmailWrapper = (props) => (<a href={`mailto:${props.email}`}>{props.name}</a>)

const settings = {
  'testDB': (el) => {
    console.log(data.data);
    ReactDOM.render(<PindropMap geometry="us" tooltipTemplate={tooltipTemplate} width={650} height={500} data={data.data} />, el);
  }
};

fetch('https://na-data-projects.s3.amazonaws.com/data/cs_cyber_apprenticeships/test-data.json').then(response => response.json()).then((_data)=>{
  data = _data;
  for(let i=0; i<queue.length; i++)
    queue[i]();
});

window.renderDataViz = function(el){
  let id = el.getAttribute('id');
  let chart = settings[id];
  if(!chart) return;

  if(data){
    chart(el);
  } else {
    queue.push(() => chart(el));
  }
}
