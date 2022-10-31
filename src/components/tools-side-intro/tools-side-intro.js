import { ToolSideIntroTitle } from "../tools-side-intro-title/tools-side-intro-title";
import { ToolSideIntroText } from "../tools-side-intro-text/tools-side-intro-text";
import "./tools-side-intro.css";

export const ToolSideIntro = () => {
  return (
    <div className="tools-side-intro">
      <ToolSideIntroText>Frontend Mentor</ToolSideIntroText>
      <ToolSideIntroTitle>Feedback Board</ToolSideIntroTitle>
    </div>
  );
};
