const InputFloating = ({ type, name, floatingText }) => {
  return (
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id={name}
        type={type}
        name={name}
        placeholder={floatingText}
        required="required"
      />
      <label forhtml={name}>{floatingText}</label>
    </div>
  );
};

InputFloating.defaultProps = {
  type: "text",
};

export default InputFloating;
