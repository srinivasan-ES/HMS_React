import {  Routes, Route ,Link } from 'react-router-dom';
import Home from './pages/Home';
import PatientRegistration from './pages/PatientRegistration';
import PatientList from "./pages/PatientList";
function App() {
  return (
  <div>
    <nav style={{ padding : '10px'}}>
      <Link to="/" style={{ marginRight: '10px'}}>Home</Link>
      <Link to="/PatientRegistration" style={{ marginRight: '10px'}}>Patient Registration</Link>
      <Link to="/PatientList" style={{ marginRight: '10px'}}>Patient List</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PatientRegistration" element={<PatientRegistration />} />
      <Route path="/PatientList" element={<PatientList />} />
    </Routes>
  </div>

  );
}

export default App