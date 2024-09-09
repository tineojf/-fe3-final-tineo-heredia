import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { routesList } from "./Routes/routesList";
import { useContextGlobal } from "./Components/utils/useContextFunction";

function App() {
  const { state } = useContextGlobal();
  const background =
    state.theme == "dark" ? { backgroundColor: "black", color: "white" } : {};
  return (
    <div className="App" data-bs-theme={state.theme} style={background}>
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
