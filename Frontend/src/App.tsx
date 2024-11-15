import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Banner from './pages/Banner';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="banner" element={<Banner />} /> 
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
