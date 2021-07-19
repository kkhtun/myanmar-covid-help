import React, { useContext } from "react";
import { ServiceTypesContext } from "./context/ServicesContext";
const ServicesFilterByType = ({ setFilterTerm }) => {
  const { types } = useContext(ServiceTypesContext);
  return (
    <div className="filter-type">
      <select
        name="type"
        id="type"
        onChange={(e) => setFilterTerm(e.target.value)}
      >
        <option value="">Filter by All Types</option>
        {types &&
          types.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
      </select>
    </div>
  );
};

export default ServicesFilterByType;
