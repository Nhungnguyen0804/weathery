import "./Card.css";

{
  /* <section>
        <CardItem label ="nhiet do" value ={} icon ={null} /> 
        <CardItem label ="nhiet do" value ={} icon ={null} /> 
        <CardItem label ="nhiet do" value ={} icon ={null} /> 
  </section> */
}

function Card({ children, className = "", ...props }) {
  return (
    <section className={`card-base ${className}`} {...props}>
      {children}
    </section>
  );
}
export default Card;
