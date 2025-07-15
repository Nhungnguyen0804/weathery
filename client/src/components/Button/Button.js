import "./Button.css";
//
import { Link } from "react-router-dom";
//  <Button internal = link external = link />

function Button({ internal, external, children, primary = false, onClick }) {
  let Tag = "button";
  const props = { onClick };
  if (internal) {
    props.internal = internal;
    Tag = Link;
  } else if (external) {
    props.external = external;
    // bien Tag ve the <a> thoi
    Tag = "a";
  }

  const wrapper_class = "btn-wrapper";
  const primary_class = "primary";
  return (
    <Tag className={wrapper_class + " " + primary_class}>
      <span>{children}</span>
    </Tag>
  );
}
export default Button;
