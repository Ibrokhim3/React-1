import "./comments-side-header.css";
import icon from "../../assets/icons/Vector.svg";
import { Button } from "../button/button";

export const CommentSideHeader = () => {
  return (
    <header className="comments-side-header">
      <div className="comments__wrapper">
        <img
          className="comments__icon"
          src={icon}
          alt="light"
          width={24}
          height={24}
        />
        <h2 className="comments__title">6 Suggestions</h2>
        <div className="comments__select-wrapper">
          <label className="comments__select-label" htmlFor="sortBy">
            Sort by :{" "}
          </label>
          <select className="comments__select" name="sortByMost" id="sortBy">
            <option value="Most Upvotes"> Most upvotes</option>
          </select>
        </div>
      </div>
      <Button to={""}>+ Add Feedback</Button>
      {/* oxshamadi botta link bolishi kerak */}
    </header>
  );
};
