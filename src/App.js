import './App.css';
import Navbar from './components/navbar';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Home from './components/home';

function App() {
  const [mouseposition, setMouseposition] = useState({
    x: 0,
    y: 0 
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMouseposition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const updateTouchPosition = (e) => {
      setMouseposition({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', updateTouchPosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchmove', updateTouchPosition);
    };
  }, []);

  const variants = {
    default: {
      x: mouseposition.x - 250,
      y: mouseposition.y - 300,
      transition: {
        type: "spring",
        damping: 50,
        stiffness: 1500
      }
    }
  }

  return (
    <div className="App">
      <Navbar onMenuToggle={handleMenuToggle} />
      {!isMenuOpen && <Home />}
      <motion.div 
        className='cursor' 
        variants={variants}
        animate="default"
      />
      
    </div>
    
  );
}

export default App;