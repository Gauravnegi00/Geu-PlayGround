import React from 'react';

const PopupCardData = ({ data, onClick }) => {
    return (
        <div className="w-[200px] h-[200px] cursor-pointer bg-white/30 backdrop-blur-md border border-white/40 rounded-lg shadow-xl p-6 max-w-sm mx-auto hover:scale-[1.1]  " onClick={() => onClick(data)}>
          <h2 className="text-[40px] text-blue-text font-bold ">About</h2>
          <h1 className="text-[35px] font-bold mb-4 text-black">{data}</h1>
        </div>
      );
};

export default PopupCardData;

