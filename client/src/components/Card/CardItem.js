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

function CardItem({ label = false, value, icon = false, className, type = 1 }) {
  return (
    <div className={`cardItem`}>
      <div className={`cardItem-wrapper ${className}`}>
        {icon && <span className="cardItem-icon">{icon}</span>}
        <div className="cardItem-text">
          {type === 1 && label && <span>{label}</span>}
          {type === 3 && label && (
            <span style={{ display: "block", fontSize: "15px" }}>{label}</span>
          )}
          <span className="cardItem-value">{value}</span>
          {type === 2 && label && (
            <span style={{ paddingLeft: "5px" }}>{label}</span>
          )}
        </div>
      </div>
    </div>
  );
}
export default CardItem;
