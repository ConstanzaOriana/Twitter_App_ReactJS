import "./styles.css";

const Card = ({ children, className = "card" }) => {
  return <div className={className}>{children}</div>;
};

export default Card;
