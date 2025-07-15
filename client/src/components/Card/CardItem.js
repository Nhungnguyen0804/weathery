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

function CardItem({ label = false, value, icon = false }) {
  return (
    <div className="cardItem">
      {icon && <span>{icon}</span>}
      {label && <span>{label}</span>}
      <span className="cardItem-value">{value}</span>
    </div>
  );
}
export default CardItem;
