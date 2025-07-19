import "./Toggle.css";
import { useState } from "react";
function Toggle({ onChange }) {
  const [isC, setIsC] = useState(true); // mặc định isC = true

  const handleToggle = () => {
    // mỗi lần click thì đổi trạng trái
    let state = !isC;
    setIsC(state);
    // thay đổi nội dung theo nhiệt độ
    let res = state ? "C" : "F";
    if (onChange) onChange(res);
  };
  let res = isC ? "C" : "F";
  return (
    <div className="toggle-container" onClick={handleToggle}>
      <div className={`toggle-f`}>F</div>
      <div className={`toggle-c`}>C</div>

      <div className={`circle ${isC ? "to-c" : "to-f"}`}>{res}</div>
    </div>
  );
}
export default Toggle;
