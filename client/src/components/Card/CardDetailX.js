import "./Card.css";
import CardItem from "./CardItem";

function CardDetail({
  title,
  label1,
  label2,
  value1,
  value2,
  icon,
  type = 2,
  className = null,
}) {
  let name = "cardDetail-wrapper";
  return (
    <div className={name}>
      <span style={{ paddingLeft: "10px", color: "white", fontSize: "bold" }}>
        {title}
      </span>
      <div className="cardDetail-item">
        <CardItem
          label={label1}
          value={value1}
          type={type}
          icon={icon}
          className={className}
        />
        <div class="divider"></div>
        <CardItem
          label={label2}
          value={value2}
          type={type}
          icon={icon}
          className={className}
        />
      </div>
    </div>
  );
}
export default CardDetail;
