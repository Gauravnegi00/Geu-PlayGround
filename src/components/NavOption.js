import React from 'react';
import Icon from './Icon';

function NavOption({ data, IconName, isActive, onClick }) {
  return (
    <div
      className={`w-[80%] h-[48px] mx-auto bg-light-blue flex items-center gap-6 rounded-[15px] cursor-pointer ${
        isActive ? 'border-left-blue' : ''
      }`}
      onClick={onClick}
    >
      <Icon name={IconName} width={20} height={20} className="ml-3" />
      <p className="text-blue-text uppercase font-bold tracking-wider text-[1.3rem]">
        {data}
      </p>
    </div>
  );
}

export default NavOption;
