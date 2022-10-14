import "./styles.css";
import GradientSpinner from "../GradientSpinner";

const LoadingOverlay = ({ visible = false }) => {
  if (!visible) return;
  return (
    <div className="loading-overlay-container">
      <GradientSpinner />
    </div>
  );
};

export default LoadingOverlay;
