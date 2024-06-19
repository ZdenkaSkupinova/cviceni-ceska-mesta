import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { City } from '../components/city/city'; 
import { cities } from '../components/cities';

const {name, photo, population, area, district } = cities

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <>
      <City key={name}
            name={name} 
            photo={photo}
            population={population}
            area={area}
            district={district}
      />
    </>     
  </div>
);