import Forecast from "../pages/Forecast/Forecast";
import Home from "../pages/Home/Home";
import Today from "../pages/Today/Today";
const routes = {
  home: "/",
  today: "/today",
  forecast: "/forecast",
};

const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.today, component: Today },
  { path: routes.forecast, component: Forecast },
];
export { routes, publicRoutes };
