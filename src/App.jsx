import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { routesList } from "./Routes/routesList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routesList.home} element={<Home />} />
        <Route path={routesList.contact} element={<Contact />} />
        <Route path={routesList.detail + ":id"} element={<Detail />} />
        <Route path={routesList.favs} element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
