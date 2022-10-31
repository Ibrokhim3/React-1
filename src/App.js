import logo from "./logo.svg";
import "./App.css";
import { Container } from "./components/container/container";
import { Wrapper } from "./components/wrapper/wrapper";
import { ToolSide } from "./components/tools-side/tools-side";
import { ToolSideIntro } from "./components/tools-side-intro/tools-side-intro";
import { FilterList } from "./components/tool-filter/tool-filter";
import { ToolRoadmap } from "./components/tool-roadmap/tool-roadmap";
import { CommentSide } from "./components/comments-side/comments-side";
import { CommentSideHeader } from "./components/comments-side-header/comments-side-header";
import { FeedbackCards } from "./components/feedback-cards/feedback-cards";

function App() {
  return (
    <Container>
      <Wrapper>
        <ToolSide>
          <ToolSideIntro></ToolSideIntro>
          <FilterList></FilterList>
          <ToolRoadmap></ToolRoadmap>
        </ToolSide>
        <CommentSide>
          <CommentSideHeader />
          <FeedbackCards />
        </CommentSide>
      </Wrapper>
    </Container>
  );
}

export default App;
