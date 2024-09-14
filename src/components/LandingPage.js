import React, { useState, useEffect } from 'react';
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

function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [active, setActive] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem('isLoggedIn', status ? 'true' : 'false');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const handleClick = (option, path) => {
    setActive(option);
    navigate(path); 
  };

  return (
    <div className=" select-none w-[100vw] h-[100vh] backGround flex">
      {/* Side navBar */}
      <div className="w-[250px] h-[100vh] pt-[5px] flex flex-col gap-5 z-[0]">
        <img src={logo} alt="Logo" width="120px" className="ml-8" />


        <NavOption data="HOME" IconName="home" isActive={active === 'home'} onClick={() => handleClick('home', '/home')} />
        <NavOption data="Coding" IconName="java" isActive={active === 'coding'} onClick={() => handleClick('coding', '/coding')} />
        <NavOption data="DSA" IconName="dsa" isActive={active === 'dsa'} onClick={() => handleClick('dsa', '/dsa')} />
        <NavOption data="WEB DEV" IconName="web" isActive={active === 'web'} onClick={() => handleClick('web', '/web')} />
        <NavOption data="THEORY" IconName="theory" isActive={active === 'theory'} onClick={() => handleClick('theory', '/theory')} />
        <NavOption data="Compiler" IconName="compiler" isActive={active === 'compiler'} onClick={() => handleClick('compiler', '/compiler')} />
        <NavOption data="contest" IconName="contest" isActive={active === 'contest'} onClick={() => handleClick('contest', '/contest')} />
      </div>

      <div className="width">
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
            <CustomBtn text="Logout" onClick={handleLogout} />
          ) : (
            <CustomBtn text="Login / Register" onClick={() => handleLogin(true)} />
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
