import PropTypes from "prop-types";
import { useContext } from "react";
import themeContext from "../context/theme";

function Button({ text, className, ...props }) {
  const theme = useContext(themeContext);
  return (
    <button
      {...props}
      className={`btn btn-${theme} ${className ? className : ""}`}
    >
      {text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
