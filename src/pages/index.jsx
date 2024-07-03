import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { City } from '../components/city/city'; 
import { cities } from '../components/cities';



document.querySelector('#root').innerHTML = render(
  <div className="container">
    <h1>Česká města</h1>
    <>
    {cities.map((city) => (
      <City key={city.name}
            name={city.name} 
            photo={city.photo}
            population={city.population}
            area={city.area}
            district={city.district}
      />
    ))}
    </>     
  </div>
);

