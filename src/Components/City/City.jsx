import "./City.css"
import { cities } from "../cities"

export const City = ({name, photo, population, area, district}) => (
<>
    <div id="cities"> 
        <div className="city">
        <h3 className="city_name">{name}</h3>
            <div className="city_head">
            <div className="city_img"> 
                <img className="photo" src={photo} alt="město" /> 
            </div>
            <div className="city_details"> 
                <p className="population">počet obyvatel: {population}</p>
                <p className="area">rozloha: {area} km²</p>
                <p className="district">{district}</p>
            </div>
            </div>
        </div>
    </div>
</>
)
