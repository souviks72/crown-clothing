import "./button.styles.scss";

const btnType = {
  inverted: "inverted",
  google: "google",
};
const Button = ({ buttonType, children, ...otherProps }) => {
  const btnClass = btnType[buttonType];
  return (
    <button className={`${btnClass}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
