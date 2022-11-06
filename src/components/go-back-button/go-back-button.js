import "./go-back-button.css";
import array from "./../../assets/icons/Path 3.svg";
import { Link } from "react-router-dom";

export const GoBackButton = ({ children }) => {
  return (
    <Link className="go-back-button" to={"#"}>
      <img className="go-back-button__img" src={array} alt="go back" />
      {children}
    </Link>
  );
};
