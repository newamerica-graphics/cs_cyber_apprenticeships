import './index.scss';
import ReactDOM from 'react-dom';
import DatabaseMap from './DatabaseMap/index';

let queue = [];
let data = null;

const settings = {
  'testDB': (el) => {
    ReactDOM.render(<DatabaseMap data={data.map} />, el);
  }
};

fetch('endpoint').then(response => response.json()).then((_data)=>{
  data = _data;
  for(let i=0; i<queue.length; i++)
    queue[i]();
});

window.renderDataViz = function(el){
  let id = el.getAttribute('id');
  let chart = settings[id];
  if(!chart) return;

  chart(el);

}
