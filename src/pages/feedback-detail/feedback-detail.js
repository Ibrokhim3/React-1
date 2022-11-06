import { Button } from "../../components/button/button";
import { GoBackButton } from "../../components/go-back-button/go-back-button";
import { FeedbackCard } from "../../components/feedback-card/feedback-card";
import "./feedback-detail.css";
import { Title } from "../../components/title/title";
import profile1 from "../../assets/img/profile1.svg";
import profile2 from "../../assets/img/profile2.svg";
import profile3 from "../../assets/img/profile3.svg";
import profile4 from "../../assets/img/profile4.svg";

import { CommentItem } from "../../components/comment-item/comment-item";
import { AddComment } from "../../components/add-comment/add-comment";

export const FeedbackDetail = () => {
  const feedbackCards = [
    {
      id: 1,
      title: "Add tags for solutions",
      desc: "Easier to search for solutions based on a specific stack.",
      commentNumber: 2,
      like: 3,
      filterButton: "Enhancement",
    },
  ]; // notori qilingan bolishi mumkun

  const commentsList = [
    {
      id: 1,
      author: "Elijah Moss",
      email: "@hexagon.bestagon",
      comment:
        "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
      img: profile1,
    },
    {
      id: 2,
      author: "James Skinner",
      email: "@hummingbird1",
      comment:
        "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
      img: profile4,
    },
  ];

  const commentsListExtra = [
    {
      id: 3,
      author: "Anne Valentine ",
      email: "@annev1990",
      comment: `@hummingbird1  While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.`,
      img: profile3,
    },
    {
      id: 4,
      author: "Ryan Welles",
      email: "@voyager.344",
      comment:
        "@annev1990  Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
      img: profile2,
    }, //shu array dan info olib bolmadi
  ];

  return (
    <div className="feedback-detail">
      <div className="feedback-detail__header">
        <GoBackButton>Go back</GoBackButton>
        <Button background={"blue"} to={"#"}>
          Edit Feedback
        </Button>
      </div>
      <ul className="feedback-card-list">
        {feedbackCards.map((card) => (
          <FeedbackCard card={card} />
        ))}
        {/* notori qilingan bolishi mumkun */}
      </ul>
      <div className="feedback-detail__comments">
        <Title margin="0 0 24px"> 4 Comments</Title>
        {/* //shu yerda togirlash kk margin */}
        <ul className="feedback-detail__comments-list">
          {commentsList.map((comment) => (
            <CommentItem comment={comment}></CommentItem>
          ))}
        </ul>
        <ul className="">
          {commentsListExtra.map((comment) => {
            <CommentItem comment={comment}></CommentItem>;
          })}
        </ul>
      </div>
      <AddComment />
    </div>
  );
};
