import "./tool-filter.css";

import { FilterButton } from "../tool-filter-button/filter-button";

export const FilterList = () => {
  const filterList = [
    {
      name: "All",
    },
    {
      name: "UI",
    },
    {
      name: "UX",
    },
    {
      name: "Enhancment",
    },
    {
      name: "Bug",
    },
    {
      name: "Feature",
    },
  ];
  return (
    <div className="filter-list-wrapper">
      <ul className="filter-list">
        {filterList.map((button, index) => (
          <li>
            <FilterButton key={index}>{button.name}</FilterButton>
          </li>
        ))}
      </ul>
    </div>
  );
};
