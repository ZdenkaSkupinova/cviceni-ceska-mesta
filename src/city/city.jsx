import "./city.css"

import { cities } from "../pages"


export const City = ({ name, population, area, district  }) => (
<div>
<h1>Česká města</h1>
    <div id="cities"> 
        {
        cities.map(cities => 
        <div className="city" key={cities.name}>

        <h3 className="city_name" >{cities.name}</h3>
            <div className="city_head">
            <div className="city_img"> 
                <img className="photo" src={cities.photo} alt="město" /> 
            </div>
            <div className="city_details"> 
                <p className="population">počet obyvatel: {cities.population}</p>
                <p className="area">rozloha: {cities.area} km²</p>
                <p className="district">{cities.district}</p>
            </div>
            </div>
        </div>)
        }   
    </div>
</div>
)
