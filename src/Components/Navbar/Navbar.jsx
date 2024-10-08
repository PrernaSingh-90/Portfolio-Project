import React, { useState } from 'react'
import portfolio_icon from '../../assets/portfolio_icon.png'
import { FaBars ,FaReact} from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const data = [
  {
    label : "HOME",
    to : '/'
  },
  {
    label : "ABOUT ME",
    to : '/about'
  },
  {
    label : "SKILLS",
    to : '/skills'
  },
  {
    label : "RESUME",
    to : '/resume'
  },
  {
    label : "PORTFOLIO",
    to : '/portfolio'
  },
  {
    label : "CONTACT",
    to : '/contact'
  }
]

function Navbar() {

 const [toggleIcon, setToggleIcon] = useState(false);

 const handleToggleIcon = () => {
  setToggleIcon(!toggleIcon);
 };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to={'/'} className='logo'>
           <FaReact size={30}/>
          </Link>
        </div>
        <ul className={`menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="item">
              <Link className="links" to={item.to}>
               {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon hidden" onClick={handleToggleIcon}>
          {
            toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
