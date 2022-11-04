import "./tool-filter.css";

import { FilterButton } from "../tool-filter-button/filter-button";

export const FilterList = () => {
  const filterList = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "UI",
    },
    {
      id: 3,
      name: "UX",
    },
    {
      id: 4,
      name: "Enhancment",
    },
    {
      id: 5,
      name: "Bug",
    },
    {
      id: 6,
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
