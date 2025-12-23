import { HashRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Nav'; 
import Home from './components/Home';
import FindOpportunities from './components/FindOpportunities';
import MyProfile from './components/MyProfile';
import Submissions from './components/Submissions';
import Coupons from './components/Coupons';

function App() {
  return (
    <HashRouter>
      <NavigationBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findOpportunities" element={<FindOpportunities />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/coupons" element={<Coupons />} />
      </Routes>
    </HashRouter>
  );
}

export default App;