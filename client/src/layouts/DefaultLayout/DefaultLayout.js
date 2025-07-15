import Header from "./Header/Header";
import Today from "../../pages/Today/Today";
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className={"content"}>{children}</div>
      </div>
    </div>
  );
}
export default DefaultLayout;
