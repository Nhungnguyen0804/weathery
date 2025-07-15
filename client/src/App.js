import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
//
import CurrentWeather from "./CurrentWeather";
//

import Home from "./pages/Home/Home";
import { publicRoutes } from "./routes/routes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            //  nếu ko chỉ định layout => undefine => sẽ lấy cái DefaultLayout
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              >
                {" "}
              </Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
