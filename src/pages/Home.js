import '../Layout.css';
import '../StyleSheet/Home.css';
import React from 'react';

  /*
   line 16  add modal-content and add btn within it
    */


const Home = () => {
  const showModal = true; 
  return (
    <div>
    <div className= "container">
    <div className={`modal ${showModal ? 'show' : ''}`}>
  
    </div>
    <div className='btns'>
        <div className='btn'>
        <button>Week 1</button>
        </div>
        <div className='btn'>
        <button>Week 2</button>
        </div>
        <div className='btn'>
        <button>Coming Soon!</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
