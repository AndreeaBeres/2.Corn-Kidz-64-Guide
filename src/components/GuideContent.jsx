import React from 'react';
import { Link } from 'react-router-dom';

const GuideContent = () => (
  <section className="content">
    <div className="content-block">
      <p>Select a map.</p>
      <ul className="ul1">
        <li><Link to="/map1" style={{ color: 'crimson' }}>Lexi's Monster Park</Link></li>
        <li><Link to="/map2" style={{ color: 'crimson' }}>Wollow's Hollow</Link></li>
        <li><Link to="/tree" style={{ color: 'crimson' }}>Inside the Tree</Link></li>
        <li><Link to="/finalmap" style={{ color: 'crimson' }}>Some Other Place</Link></li>
      </ul>
    </div>
  </section>
);

export default GuideContent;