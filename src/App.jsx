import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Lapor from "../routes/Lapor";
import Lacak from "../routes/Lacak";
import Upvote from "../routes/Upvote.jsx";
import Landing from "../routes/Landing.jsx";
import Registration from "../routes/Registration.jsx";
import Login from "../routes/Login.jsx";
import Form from "../routes/Form.jsx";

function App() {
  return (
    <Routes>
      {/* Landing page tanpa Navbar */}
      <Route path="/" element={<Landing />} />

      {/* Halaman lain dengan Navbar */}
      <Route
        path="/lapor"
        element={
          <div className="font-montserrat">
            <Navbar />
            <div>
              <Lapor />
            </div>
          </div>
        }
      />

      <Route
        path="/lacak"
        element={
          <div className="font-montserrat">
            <Navbar />
            <div>
              <Lacak />
            </div>
          </div>
        }
      />

      <Route
        path="/upvote"
        element={
          <div className="font-montserrat">
            <Navbar />
            <div>
              <Upvote />
            </div>
          </div>
        }
      />
      <Route path="/registrasi" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/formulir" element={<Form />} />
    </Routes>
  );
}

export default App;
