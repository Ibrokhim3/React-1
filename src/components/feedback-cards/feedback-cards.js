import { FeedbackCard } from "../feedback-card/feedback-card";
import "./feedback-cards.css";

export const FeedbackCards = () => {
  const feedbackCards = [
    {
      title: "Add tags for solutions",
      desc: "Easier to search for solutions based on a specific stack.",
      commentNumber: 2,
      like: 3,
      filterButton: "Enhancement",
    },
    {
      title: "Add a dark theme option",
      desc: "It would help people with light sensitivities and who prefer dark mode.",
      commentNumber: 4,
      like: 112,
      filterButton: "Feature",
    },
    {
      title: "Q&A within the challenge hubs",
      desc: "Challenge-specific Q&A would make for easy reference.",
      commentNumber: 1,
      like: 99,
      filterButton: "Feature",
    },
    {
      title: "Allow image/video upload to feedback",
      desc: "Images and screencasts can enhance comments on solutions.",
      commentNumber: 2,
      like: 65,
      filterButton: "Enhancement",
    },
    {
      title: "Ability to follow others",
      desc: "Stay updated on comments and solutions other people post.",
      commentNumber: 3,
      like: 51,
      filterButton: "Feature",
    },
    {
      title: "Preview images not loading",
      desc: "Challenge preview images are missing when you apply a filter.",
      commentNumber: 0,
      like: 42,
      filterButton: "Bug",
    },
  ];
  return (
    <div className="feedback-card-wrapper">
      <ul className="feedback-card-list">
        {feedbackCards.map((card) => (
          <FeedbackCard card={card} />
        ))}
      </ul>
    </div>
  );
};
