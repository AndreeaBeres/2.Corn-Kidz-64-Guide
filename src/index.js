import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Map1 from './pages/Map1';
import Map2 from './pages/Map2';
import Tree from './pages/Tree';
import FinalMap from './pages/FinalMap';
import Clothes from './pages/Clothes';
import Achievements from './pages/Achievements';
import Challenges from './pages/Challenges';
import './Home.css';
import './Guide.css';
import './Map1.css';
import './Map2.css';
import './Tree.css';
import './FinalMap.css';
import './Clothes.css';
import './Achievements.css';
import './Challenges.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/map1" element={<Map1 />} />
        <Route path="/map2" element={<Map2 />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/finalmap" element={<FinalMap />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/challenges" element={<Challenges />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  </React.StrictMode>
);
