import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="sidebar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/guide">Guide</Link></li>
      <li><Link to="/clothes">Clothes</Link></li>
      <li><Link to="/achievements">Achievements</Link></li>
      <li><Link to="/challenges">Challenges</Link></li>
      <li><Link to="/guide"> &gt; Back </Link></li>
    </ul>
    <div className="images">
      <img src="/images/avatars/Alexis.png" alt="Seve's Guider" className="image" />
      <img src="/images/badges/badge.png" alt="Badge" className="badge" />
      <img src="/images/badges/foilbadge.png" alt="Foil Badge" className="badge" />
    </div>
  </aside>
);

export default Sidebar;

