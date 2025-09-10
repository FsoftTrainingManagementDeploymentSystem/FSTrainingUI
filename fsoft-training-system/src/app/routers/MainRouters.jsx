import { BrowserRouter, Route, Routes } from "react-router-dom";
import routesConfig from "./routes.json";
import Home from "../../home";
import { Suspense } from "react";
import LoaddingPage from "../layout/LoadingPage/index";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>{generateRoutes(routesConfig)}</Routes>
    </BrowserRouter>
  );
}

const componentMap = {
  Home: Home,
};

const generateRoutes = (routes) => {
  return routes.map((route, index) => {
    const Element = componentMap[route.element];

    if (!Element) return null;

    let element = <Element />;

    // Bọc `Suspense` nếu có `isSuspense: true`
    if (route.isSuspense) {
      element = <Suspense fallback={<LoaddingPage />}>{element}</Suspense>;
    }
    if (route.isSuspense2) {
      element = <Suspense fallback={<LoaddingPage />}>{element}</Suspense>;
    }

    // // Bọc `PrivateRoute` nếu có quyền hạn
    // if (route.private) {
    //   element = (
    //     <PrivateRoute allowedRoles={route.private.allowedRoles}>
    //       {element}
    //     </PrivateRoute>
    //   );
    // }

    // Nếu là route `index`, dùng `<Route index element={...} />`
    if (route.index) {
      return <Route key={index} index element={element} />;
    }

    if (route.redirect) {
      return (
        <Route
          key={index}
          path={route.path}
          element={<RedirectRoute to={route.redirect} />}
        />
      );
    }

    return (
      <Route key={index} path={route.path} element={element}>
        {route.children && generateRoutes(route.children)}
      </Route>
    );
  });
};
