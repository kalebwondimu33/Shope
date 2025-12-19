import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Autentication from "./routes/autentication/Autentication";
import Shop from "./routes/shop/Shop";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Autentication />} />
      </Route>
    </Routes>
  );
};

export default App;
