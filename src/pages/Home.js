import '../Layout.css';
import '../StyleSheet/Home.css';
import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  const showModal = true; 
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
        <div>
        <ul>
        <li>
          <Link to="/Week1">Week 1</Link>
        </li>
        <li>
          <Link to="/Week2">Week 2</Link>
        </li>
        <li>
          <Link to="/Week3">Week 3</Link>
        </li>
        <li>
          <Link to="/Week4">Week 4</Link>
        </li>
      </ul>
      <Outlet />
        </div>
        </div>
  );
}

export default Home;
