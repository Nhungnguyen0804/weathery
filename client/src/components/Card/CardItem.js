import "./Card.css";
{
  /* 
  
  <section>
        <CardItem label ="nhiet do" value ={} icon ={null} /> 
        <CardItem label ="nhiet do" value ={} icon ={null} /> 
        <CardItem label ="nhiet do" value ={} icon ={null} /> 
  </section>
    
    
    */
}

//  style={{ paddingLeft: "5px"}}
// 2 type:
// row : icon - text
// column :
// icon
// text
function CardItem({
  label = false,
  value,
  icon = false,
  className,
  type = "row",
}) {
  return (
    <div className={`cardItem ${className}`}>
      {icon && <span className="cardItem-icon">{icon}</span>}

      {/* text  */}
      <div className="cardItem-text">
        {type === "row" && label && <span>{label}</span>}
        {type === "column" && label && (
          <span style={{ display: "block", fontSize: "15px" }}>{label}</span>
        )}

        {/* --- */}
        <span className="cardItem-value">{value}</span>
      </div>
    </div>
  );
}
export default CardItem;
