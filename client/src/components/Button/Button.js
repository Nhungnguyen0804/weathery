import "./Button.css";
//
import { Link } from "react-router-dom";
//  <Button internal = "linkto" external = "linkto" />

function Button({
  internal,
  external,
  iconLeft,
  content,
  iconRight,
  activeContent,
  type = "", // cycle, square, transparent
  size = "", // small, medium, large

  onClick,
}) {
  let Tag = "button";
  const props = { onClick };

  if (internal) {
    props.to = internal;
    Tag = Link;
  } else if (external) {
    props.href = external;
    // bien Tag ve the <a>
    Tag = "a";
  }

  const wrapper_class = "btn-wrapper";
  let type_class = "";
  if (type === "cycle") type_class = "btn-cycle";
  if (type === "transparent") type_class = "btn-transparent";
  if (type === "square") type_class = "btn-square";

  let size_class = ""; // small (default) , medium, large
  if (size === "medium") size_class = "btn-medium";
  let activeClass = "";
  if (content === activeContent) activeClass = "activeBtn";
  else activeClass = "";
  return (
    <Tag
      className={
        wrapper_class + " " + type_class + " " + activeClass + " " + size_class
      }
      {...props}
    >
      {iconLeft && <span className="button-icon">{iconLeft}</span>}
      {content && <span>{content}</span>}
      {iconRight && (
        <span className="button-icon" style={{ marginLeft: "10px" }}>
          {iconRight}
        </span>
      )}
    </Tag>
  );
}
export default Button;
