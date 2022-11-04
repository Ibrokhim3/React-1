import "./tool-roadmap-type.css";

export const RoadmapType = ({ item: { status, number, color } }) => {
  return (
    <li className="roadmap-item">
      <div className="roadmap-inner-wrapper">
        <span
          style={{
            background: color,
          }}
          className="roadmap-color"
        ></span>
        <p className="roadmap-text">{status}</p>
      </div>

      <span className="roadmap-num">{number}</span>
    </li>
  );
};
