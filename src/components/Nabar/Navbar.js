// import React from 'react'
// import { FaSearch } from "react-icons/fa";
// import './navbar.css'
// import fb from '../../asserts/fb.png';
// import insta from "../../asserts/inst.png";
// import linkd from "../../asserts/link.png";
// import twitter from "../../asserts/twitter.png";

// function Navbar() {
//     return (
        
//         <div className='main-container'>
//             <div className='second-container'>
//                 <div className='media'>
//                     <img className="im" src={fb} alt="facebook"/>
//                     <img className="im" src={insta} alt="instagram"/>
//                     <img className="im" src={linkd} alt="linkdin"/>
//                     <img className="im" src={twitter} alt="twitter"/>
//                 </div>
//                 <div className='nav-links'>

//                     <a href="/">Home</a>
//                     <a href="/fashion">Fashion</a>
//                     <a href="#technology">Technology</a>
//                     <a href="#lifestyle">LifeStyle</a>
//                 </div>
//                 <div className='search'>
//                     <FaSearch/>
//                 </div>
//             </div>


//         </div>


//   )
// }

// export default Navbar


import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import fb from '../../asserts/fb.png';
import insta from '../../asserts/inst.png';
import linkd from '../../asserts/link.png';
import twitter from '../../asserts/twitter.png';

function Navbar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className='main-container'>
      <div className='second-container'>
        <div className='media'>
          <img className='im' src={fb} alt='facebook' />
          <img className='im' src={insta} alt='instagram' />
          <img className='im' src={linkd} alt='linkdin' />
          <img className='im' src={twitter} alt='twitter' />
        </div>
        <div className='nav-links'>
          <Link to='/' className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to='/fashion' className={pathname === '/fashion' ? 'active' : ''}>Fashion</Link>
          <Link to='#technology' className={pathname === '#technology' ? 'active' : ''}>Technology</Link>
          <Link to='#lifestyle' className={pathname === '#lifestyle' ? 'active' : ''}>LifeStyle</Link>
        </div>
        <div className='search'>
          <FaSearch />
        </div>
      </div>
    </div>
  );
}

export default Navbar;



