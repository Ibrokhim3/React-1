import { CommentSideHeader } from "../../components/comments-side-header/comments-side-header";
import { CommentSide } from "../../components/comments-side/comments-side";
import { FeedbackCards } from "../../components/feedback-cards/feedback-cards";
import { FilterList } from "../../components/tool-filter/tool-filter";
import { ToolRoadmap } from "../../components/tool-roadmap/tool-roadmap";
import { ToolSideIntro } from "../../components/tools-side-intro/tools-side-intro";
import { ToolSide } from "../../components/tools-side/tools-side";
import "./suggestions-page.css";

export const SuggestionsPage = () => {
  return (
    <div className="suggestions-page">
      <ToolSide>
        <ToolSideIntro></ToolSideIntro>
        <FilterList></FilterList>
        <ToolRoadmap></ToolRoadmap>
      </ToolSide>
      <CommentSide>
        <CommentSideHeader />
        <FeedbackCards />
      </CommentSide>
    </div>
  );
};
