import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Search from "../pages/Search";
import WatchList from "../pages/WatchList";
import Originals from "../pages/Originals";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import SignIn from "../pages/Login";
import SignUp from "../pages/Register";

function AppRoutes() {
  const location = useLocation();

  const noHeaderRoutes = ["/signin", "/signup"];
  const hideHeader = noHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/originals" element={<Originals />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
