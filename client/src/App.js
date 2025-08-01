import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

import { publicRoutes } from "./routes/routes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import AppProviders from "./context/AppProviders";
import images from "./assets/images/images";
import { preloadImages } from "./lib/preloadImages";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    preloadImages(Object.values(images));
  }, []);
  return (
    <AppProviders>
      <Router basename="/weathery">
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
    </AppProviders>
  );
}

export default App;
