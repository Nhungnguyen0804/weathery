import Home from "../pages/Home/Home";
import Today from "../pages/Today/Today";
const routes = {
  home: "/",
  today: "/today",
};

const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.today, component: Today },
];
export { publicRoutes };
