import PropTypes from "prop-types";

const TextComponent = ({ title, description }) => {
  return (
    <div className="textComponent">
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
};

TextComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TextComponent;
