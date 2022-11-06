import "./comment-item.css";

export const CommentItem = ({ comment }) => {
  return (
    <li className="comment-item">
      <img
        className="comment-item__img"
        src={comment.img}
        alt="profile-photo"
        width={40}
        height={40}
      />
      <div className="comment-item__inner-wrapper">
        <h4 className="comment-item__title">{comment.author}</h4>
        <p className="comment-item__email">{comment.email}</p>
        <p className="comment-item__text">{comment.comment}</p>
      </div>
      <button className="comment-item__button">Reply</button>
    </li>
  );
};
