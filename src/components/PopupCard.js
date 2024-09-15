import React from 'react';

const PopupCard = ({ onClose, content }) => {
  const commonStyles = "p-6 rounded-lg shadow-lg";

  const renderContent = () => {
    switch (content) {
      case 'C++':
        return (
          <div className={`${commonStyles} bg-white w-[500px] h-[400px]`}>
            <h3 className="text-2xl font-bold">C++ Pros and Cons</h3>
            <div className="mt-4">
              <h4 className="font-semibold">Pros:</h4>
              <ul className="list-disc ml-5">
                <li>High performance</li>
                <li>Object-oriented</li>
                <li>Rich library support</li>
              </ul>
              <h4 className="font-semibold mt-4">Cons:</h4>
              <ul className="list-disc ml-5">
                <li>Complex syntax</li>
                <li>Manual memory management</li>
                <li>Steep learning curve</li>
              </ul>
            </div>
          </div>
        );
      case 'Java':
        return (
          <div className={`${commonStyles} bg-white w-[500px] h-[400px]`}>
            <h3 className="text-2xl font-bold">Java Pros and Cons</h3>
            <div className="mt-4">
              <h4 className="font-semibold">Pros:</h4>
              <ul className="list-disc ml-5">
                <li>Platform-independent</li>
                <li>Automatic memory management</li>
                <li>Strong community support</li>
              </ul>
              <h4 className="font-semibold mt-4">Cons:</h4>
              <ul className="list-disc ml-5">
                <li>Slower than C++</li>
                <li>Memory consumption</li>
                <li>Verbose syntax</li>
              </ul>
            </div>
          </div>
        );
      default:
        return (
          <div className={`${commonStyles} bg-white w-[800px] h-[500px]`}>
            No content available
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 ">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute  top-4 right-4  font-bold text-black  p-2 text-[20px]  w-7 h-7 rounded-full flex justify-center items-center  "
        >
          X
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default PopupCard;
