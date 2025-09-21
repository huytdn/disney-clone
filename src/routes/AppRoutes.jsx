import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home";
import Search from "../pages/Search";
import WatchList from "../pages/WatchList";
import Originals from "../pages/Originals";
import Movies from "../pages/Movies";
import SignIn from "../pages/Login";
import SignUp from "../pages/Register";

function PrivateRoute({ children }) {
  const session = sessionStorage.getItem("account");
  return session ? children : <Navigate to="/signin" replace />;
}

function AppRoutes() {
  const location = useLocation();
  const noHeaderRoutes = ["/signin", "/signup"];
  const hideHeader = noHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Private routes */}
        <Route
          path="/watchlist"
          element={
            <PrivateRoute>
              <WatchList />
            </PrivateRoute>
          }
        />
        <Route
          path="/originals"
          element={
            <PrivateRoute>
              <Originals />
            </PrivateRoute>
          }
        />
        {/* fallback */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
}

export default AppRoutes;
