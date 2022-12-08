import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input-container">
      <input {...otherProps} />
      {label && <label>{label}</label>}
      {/* label is after input because ~ is the general sibling selector in css and it select any sibling AFTER current one.
      label appears to be above input(even though in html it is below is due to css position --> if parent is relative and 
      child is absolute, the will stick to each other) 
      
      Also we can check if an input element has some value entered in it using CSS
      If input element has "required" attribute, then in css, we can use:
      input:valid{} for when input has value
      input:inalid{} for when input has no value
      */}
    </div>
  );
};

export default FormInput;
