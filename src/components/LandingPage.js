import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CustomBtn from './CustomBtn';
import Icon from './Icon';
import logo from './Assests/logo3.0.png';
import NavOption from './NavOption';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import CodingPage from './CodingPage';
import DsaPage from './DsaPage';
import WebDevPage from './WebDevPage';
import TheoryPage from './TheoryPage';
import Compiler from './Compiler';
import ContestPage from './ContestPage';
import profile from './Assests/profile.png';
function LandingPage() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [active, setActive] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);
  // For loggedIn
  const handleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem('isLoggedIn', status ? 'true' : 'false');
  };
  
  // For loggedOut
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('preferredLanguage');
  };
  // For Navigation
  const handleClick = (option, path) => {
    setActive(option);
    navigate(path); 
  };
  // For Menu 
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  // For Handle Menu
  const handleMenuItemClick = (action) => {
    setIsMenuOpen(false);
    if (action === 'Logout') {
      handleLogout();
    } else {
      console.log(action); 
    }
  };
  // For Close Menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };
//  For handle Side effect
  useEffect(() => {
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {

      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // For getting user Name
  const getFirstName = () => {
    const fullName = localStorage.getItem('userName');
    if (fullName && typeof fullName === 'string') {
      const firstName = fullName.split(' ')[0];
      return firstName;
    }
    return '';
  };

  const firstName = getFirstName();

  return (
    <div className="select-none w-[100vw] h-[100vh] backGround flex">
      {/* Side navBar */}
      <div className="w-[250px] h-[100vh] pt-[5px] flex flex-col gap-5 z-[0]">
        <img src={logo} alt="Logo" width="120px" className="ml-8" />

          <>
            <NavOption data="HOME" IconName="home" isActive={active === 'home'} onClick={() => handleClick('home', '/home')} />
            <NavOption data="Coding" IconName="java" isActive={active === 'coding'} onClick={() => handleClick('coding', '/coding')} />
            <NavOption data="DSA" IconName="dsa" isActive={active === 'dsa'} onClick={() => handleClick('dsa', '/dsa')} />
            <NavOption data="WEB DEV" IconName="web" isActive={active === 'web'} onClick={() => handleClick('web', '/web')} />
            <NavOption data="THEORY" IconName="theory" isActive={active === 'theory'} onClick={() => handleClick('theory', '/theory')} />
            <NavOption data="Compiler" IconName="compiler" isActive={active === 'compiler'} onClick={() => handleClick('compiler', '/compiler')} />
            <NavOption data="Contest" IconName="contest" isActive={active === 'contest'} onClick={() => handleClick('contest', '/contest')} />
          </>
       
      </div>

      <div className="flex-1">
        {/* Top navBar */}
        <div className="flex items-center justify-end h-[70px] w-[100%] pr-[28px] gap-10">
          <div className="relative w-[180px]">
            <input
              type="text"
              placeholder="Search.."
              className="w-[200px] h-[50px] rounded-full px-4 pr-10 outline-none bg-gray-300"
            />
            <Icon
              name="search"
              width={20}
              height={20}
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
            />
          </div>

          {isLoggedIn ? (
            <div className="relative gap-0 flex justify-center items-center ">
              <p className=' text-sm '>{firstName}</p>
              <img
                src={profile}
                alt="CircularImage"
                className="w-[55px] rounded-full cursor-pointer "
                onClick={toggleMenu}
              />

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div
                  ref={menuRef}
                  className="absolute top-14 right-0 w-[300px] h-[300px] bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                >
                  <ul className="flex flex-col p-4 space-y-2 h-full">
                    <li
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded"
                      onClick={() => handleMenuItemClick('My Profile')}
                    >
                      My Profile
                    </li>
                    <li
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded"
                      onClick={() => handleMenuItemClick('My Courses')}
                    >
                      My Courses
                    </li>
                    <li
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded"
                      onClick={() => handleMenuItemClick('Leadership')}
                    >
                      Leadership
                    </li>
                    <li
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded"
                      onClick={() => handleMenuItemClick('Logout')}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <CustomBtn text="Login / Register" onClick={() => navigate('/')} />
          )}
        </div>

        {/* Main content */}
        <Routes>
          <Route path="/" element={isLoggedIn ? <HomePage /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
          <Route path="coding" element={isLoggedIn ? <CodingPage /> : <Navigate to="/" />} />
          <Route path="dsa" element={isLoggedIn ? <DsaPage /> : <Navigate to="/" />} />
          <Route path="web" element={isLoggedIn ? <WebDevPage /> : <Navigate to="/" />} />
          <Route path="theory" element={isLoggedIn ? <TheoryPage /> : <Navigate to="/" />} />
          <Route path="compiler" element={isLoggedIn ? <Compiler /> : <Navigate to="/" />} />
          <Route path="contest" element={isLoggedIn ? <ContestPage /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default LandingPage;