import "./Card.css";

{
  /* <section>
        <CardItem label ="nhiet do" value ={} icon ={null} /> 
        <CardItem label ="nhiet do" value ={} icon ={null} /> 
        <CardItem label ="nhiet do" value ={} icon ={null} /> 
  </section> */
}

function Card({ children, className = "", id, onClick, ...props }) {
  function handleClick() {
    // gọi hàm từ cha, truyen id len
    onClick(id);
  }
  return (
    <section
      className={`card-base ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </section>
  );
}
export default Card;
