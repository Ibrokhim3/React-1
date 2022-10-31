import "./tool-roadmap-type.css";

export const RoadmapType = ({ item }) => {
  return (
    <li className="roadmap-item">
      <div className="roadmap-inner-wrapper">
        <span className="roadmap-color"></span>
        <p className="roadmap-text">{item.status}</p>
      </div>

      <span className="roadmap-num">{item.number}</span>
    </li>
  );
};
