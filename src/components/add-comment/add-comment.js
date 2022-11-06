import { Button } from "../button/button";
import { Title } from "../title/title";
import "./add-comment.css";

export const AddComment = () => {
  return (
    <div className="add-comment">
      <label htmlFor="addComment">
        <Title marginBottom={"margin-bottom: 24px"}>Add comment</Title>
        {/* //shu joyida oxshamadi margin */}
      </label>
      <textarea
        name="addComment"
        id="addComment"
        cols="30"
        rows="10"
        placeholder="Type your comment here"
        className="add-comment__input"
      ></textarea>
      <div className="add-comment__wrapper">
        <p className="add-comment__counter">
          <span className="add-comment__number">250 </span>
          Characters left
        </p>
        <Button>Post Comment</Button>
      </div>
    </div>
  );
};
