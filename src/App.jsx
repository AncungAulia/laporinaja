import {Routes, Route} from 'react-router-dom';
import Navbar from "../components/Navbar.jsx";
import Lapor from '../routes/Lapor';
import Lacak from "../routes/Lacak";
import Upvote from "../routes/Upvote.jsx";
import Landing from "../routes/Landing.jsx";

function App() {
  return (
    <Routes>
      {/* Landing page tanpa Navbar */}
      <Route path="/" element={<Landing/>}/>
      
      {/* Halaman lain dengan Navbar */}
      <Route path="/lapor" element={
        <div className="min-h-screen bg-[#F4F7FA] pt-16">
          <Navbar/>
          <div className="p-4">
            <Lapor/>
          </div>
        </div>
      }/>
      
      <Route path="/lacak" element={
        <div className="min-h-screen bg-[#F4F7FA] pt-16">
          <Navbar/>
          <div className="p-4">
            <Lacak/>
          </div>
        </div>
      }/>
      
      <Route path="/upvote" element={
        <div className="min-h-screen bg-[#F4F7FA] pt-16">
          <Navbar/>
          <div className="p-4">
            <Upvote/>
          </div>
        </div>
      }/>
    </Routes>
  );
}

export default App;