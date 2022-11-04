import { RoadmapType } from "../tool-roadmap-type/tool-roadmap-type";
import "./tool-roadmap.css";

export const ToolRoadmap = () => {
  const roadmapList = [
    {
      color: "#F49F85",
      status: "Planned",
      number: 2,
    },
    {
      color: "#AD1FEA",
      status: "In-Progress",
      number: 3,
    },
    {
      color: "#62BCFA",
      status: "Live",
      number: 1,
    },
  ];
  return (
    <div className="roadmap__wrapper">
      <div className="roadmap__info-wrapper">
        <h3 className="roadmap__title">Roadmap</h3>
        <a className="roadmap__link" href="#">
          View
        </a>
      </div>
      <ul className="roadmap__list">
        {roadmapList.map((item) => (
          <RoadmapType item={item} />
        ))}
      </ul>
    </div>
  );
};
