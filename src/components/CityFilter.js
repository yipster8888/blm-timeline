import React from "react";
import "../css/CityFilter.css";

import Api from "../api/City";

function CityFilter(props) {
  let options = [];

  //Not sure if this works yet
  Api.getCities().then((res) => {
    if (res.data.cities != null) {
      options = res.data.cities.map((element, index) => {
        return (
          <option key={index} value={element.location}>
            {element.location}
          </option>
        );
      });
    }
  });

  return (
    <div className="city-filter">
      <label className="city-filter-label">Filter by city: </label>
      <select name="targetCity" onChange={props.handleChangeTargetCity}>
        {options}
      </select>
    </div>
  );
}

export default CityFilter;
