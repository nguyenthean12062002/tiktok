import { publicRouter } from "./component/router";
import { DefaultLayout } from "./component/Layout";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Page = route.component;
            // mặc định Layout trang
            let Layout = DefaultLayout;
            // logic xác định layout cho trang
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
                  // thay đổi lay out
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
// tiktok clone
