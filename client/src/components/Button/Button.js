import "./Button.css";
//
import { Link } from "react-router-dom";
//  <Button internal = link external = link />

function Button({
  internal,
  external,
  icon,
  content,
  activeContent,
  type = false, // cycle,
  onClick,
}) {
  let Tag = "button";
  const props = { onClick };
  if (internal) {
    props.to = internal;
    Tag = Link;
  } else if (external) {
    props.href = external;
    // bien Tag ve the <a> thoi
    Tag = "a";
  }

  const wrapper_class = "btn-wrapper";
  let type_class = "";
  if (type === "cycle") type_class = "btn-cycle";

  let activeClass = "";
  if (content === activeContent) activeClass = "activeBtn";
  else activeClass = "";
  return (
    <Tag
      className={wrapper_class + " " + type_class + " " + activeClass}
      {...props}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {content && <span>{content}</span>}
    </Tag>
  );
}
export default Button;
