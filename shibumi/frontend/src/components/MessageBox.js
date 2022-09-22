import Alert from "react-bootstrap/Alert";
import "./messagebox.scss";

export default function MessageBox(props) {
  return (
    <div className="messagebox">
      <Alert className="messagebox__alert" variant={props.variant || "info"}>
        {props.children}
      </Alert>
    </div>
  );
}
