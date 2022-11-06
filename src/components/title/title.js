import "./title.css";
import { Link } from "react-router-dom";

export const Title = ({ to, children, margin }) => {
  if (to)
    return (
      <Link
        style={{
          textDecoration: "none",
          margin,
        }}
        className="title"
        to={to}
      >
        {children}
      </Link>
    );

  return (
    <h4
      style={{
        margin,
      }}
      className="title"
    >
      {children}
    </h4>
  ); // ishlamadi
};
