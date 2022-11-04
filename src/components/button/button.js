import "./button.css";
import { Link } from "react-router-dom";

export const Button = ({ to, children, type = "submit" }) => {
  if (to)
    return (
      <Link className="button" to={to}>
        {children}
      </Link>
    );
  return (
    <button type={type} className="button">
      {children}
    </button>
  ); //shu link bo'lishi kerak / va boshqa xolatda button bolish kerak 1:11:00 route darsi
  //color uchun 1:15:00
};
