import logo from "./logo.svg";
import "./App.css";
import { Container } from "./components/container/container";
import { SuggestionsPage } from "./pages/suggestions-page/suggestions-page";
import { FeedbackDetail } from "./pages/feedback-detail/feedback-detail";

function App() {
  return (
    <Container>
      {/* <SuggestionsPage></SuggestionsPage> */}
      <FeedbackDetail></FeedbackDetail>
    </Container>
  );
}

export default App;
