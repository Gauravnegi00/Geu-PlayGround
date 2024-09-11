import React, { useState } from 'react';
import Custom_btn from './Custom_btn';
import Icon from './Icon';
import logo from './Assests/logo3.0.png';
import NavOption from './NavOption';
import LoginPage from './LoginPage';
// import HomePage from './HomePage';

function LandingPage() {
  const [active, setActive] = useState('home');

  const handleClick = (option) => {
    setActive(option);
  };
  


  return (
    <div className="landingPage select-none w-[100vw] h-[100vh] backGround flex  ">
                 {/* Side navBar */}
      <div className="w-[250px] h-[100vh] pt-[5px] flex flex-col gap-5 z-[0]">
        <img src={logo} alt="Logo" width="120px" className="ml-8" />
        <NavOption
          data="HOME"
          IconName="home"
          isActive={active === 'home'}
          onClick={() => handleClick('home')}
        />
        <NavOption
          data="DSA"
          IconName="dsa"
          isActive={active === 'dsa'}
          onClick={() => handleClick('dsa')}
        />
        <NavOption
          data="WEB DEV"
          IconName="web"
          isActive={active === 'webDev'}
          onClick={() => handleClick('webDev')}
        />
        <NavOption
          data="THEORY"
          IconName="theory"
          isActive={active === 'theory'}
          onClick={() => handleClick('theory')}
        />
        <NavOption
          data="Compiler"
          IconName="compiler"
          isActive={active === 'compiler'}
          onClick={() => handleClick('compiler')}
        />
        <NavOption
          data="contest"
          IconName="contest"
          isActive={active === 'contest'}
          onClick={() => handleClick('contest')}
        />
      </div>
      <div className='width'>
                      {/* Top navBar */}
      <div className="flex  items-center justify-end h-[70px] w-[100%] pr-[28px]">
        <div className="relative w-[180px]">
          <input
            type="text"
            placeholder="Search.."
            className="w-full h-[30px] rounded-full px-4 pr-10 outline-none bg-gray-300"
          />
          <Icon
            name="search"
            width={20}
            height={20}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <Custom_btn data="Login / Register" />
      </div>
              {/* Center page */}
      
        <LoginPage />
      </div>
    </div>
  );
}

export default LandingPage;
