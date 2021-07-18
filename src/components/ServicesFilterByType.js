import React, { useEffect, useState } from "react";

const ServicesFilterByType = () => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    fetch("https://kkhtun.github.io/mmcovid-data/validation.json")
      .then((res) => res.json())
      .then((data) => setTypes(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="filter-type">
      <select
        name="type"
        id="type"
        // onChange={handleFilterByType}
        // value={filterTerm}
      >
        <option value="">All</option>
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
