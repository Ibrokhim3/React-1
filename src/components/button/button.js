import "./button.css";
import { Link } from "react-router-dom";

const btnColors = {
  purple: "#AD1FEA",
  blue: "#4661E6",
};

export const Button = ({ to, children, type = "submit", background }) => {
  const activeBackround = btnColors[background] || background;
  if (to)
    return (
      <Link
        style={{ background: activeBackround, textDecoration: "none" }}
        className="button"
        to={to}
      >
        {children}
      </Link>
    );
  return (
    <button
      style={{ background: activeBackround }}
      type={type}
      className="button"
    >
      {children}
    </button>
  );
  //color uchun 1:15:00
};
