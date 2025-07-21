import Card from "./Card";

// obj forecast trong json
// className : sunrise sunset moonrise moonset

import images from "../../assets/images/images";
function ImgCard({ label, value, className, background, type }) {
  let classSquare = "";
  type === "squareCard" ? (classSquare = "imgCard-square") : (classSquare = "");
  return (
    <Card
      className={`imgCard ${classSquare} ${className}`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div style={{ fontSize: "25px", paddingLeft: "5px" }}>{label}</div>
      <div style={{ fontFamily: "Brush Script MT", fontSize: "40px" }}>
        {value}
      </div>
    </Card>
  );
}

export default ImgCard;
