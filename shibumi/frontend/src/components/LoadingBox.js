import Spinner from "react-bootstrap/Spinner";
import "./loadingbox.scss";

export default function LoadingBox() {
  return (
    <div className="loader__spinner">
      <Spinner
        className="loader__spinner__obj"
        animation="border"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
