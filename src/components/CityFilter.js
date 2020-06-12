import React from "react";
import "../css/CityFilter.css";

function CityFilter(props) {
  let options = [];
  if (props.data.timelineData != null) {
    options = props.data.timelineData.map((element, index) => {
      return (
        <option key={index} value={element.location}>
          {element.location}
        </option>
      );
    });
  }

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
