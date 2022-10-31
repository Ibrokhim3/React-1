import "./filter-button.css";

export const FilterButton = ({ button }) => {
  return (
    <li className="filter-item">
      <button className="filter-button">{button.name}</button>
    </li>
  );
};
