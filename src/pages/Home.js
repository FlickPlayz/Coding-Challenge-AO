import '../Layout.css';
import '../StyleSheet/Home.css';
import React from 'react';

const Home = () => {
  const showModal = true; 
  return (
    <div>
    <div className={`modal ${showModal ? 'show' : ''}`}>
        <div>
        <button className='btn'>Week 1</button>
        </div>
        <div>
        <button className='btn'>Week 2</button>
        </div>
        <div>
        <button className='btn'>Coming Soon!</button>
        </div>
        </div>
        </div>
  );
}

export default Home;
