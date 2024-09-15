import React, { useState, useEffect } from 'react';
import axios from 'axios';
import codingImg from './Assests/codingImg3.png';
import PopupCard from './PopupCard';
import PopupCardData from './PopupCardData';
import CodingDocumentation from './CodingDocumentation';

const CodingPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [userPreferredLanguage, setUserPreferredLanguage] = useState('');

  // Function to open popup
  const openPopup = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  // Function to close popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent('');
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('User not logged in');
      return;
    }

    try {
      await axios.patch(`http://localhost:5000/users/${userId}`, {
        preferredLanguage: selectedLanguage
      });
      alert('Preferred language updated successfully!');
    } catch (error) {
      console.error('Error updating preferred language:', error);
      alert('Error updating preferred language');
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:5000/users/${userId}`);
          setUserPreferredLanguage(response.data.preferredLanguage || '');
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className='centerDiv width height flex justify-center rounded-xl'>
      {userPreferredLanguage ? (
        <div>
        <CodingDocumentation />
        </div>
      ) : (
        <div className="w-[50%] h-[100%] px-8 pt-6 pb-8 flex flex-col gap-14">
          <h2 className="text-center text-[30px] font-bold text-blue-text mt-10">
            Choose a Programming Language
          </h2>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-[25px] font-bold mb-2" htmlFor="language">
                Select the language in which you want to learn coding:
              </label>
              <div className="flex items-center mb-4">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  id="cpp"
                  name="language"
                  value="C++"
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                />
                <label className="text-gray-700 text-2xl cursor-pointer" htmlFor="cpp">
                  C++
                </label>
              </div>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  id="java"
                  name="language"
                  value="Java"
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                />
                <label className="text-gray-700 text-2xl cursor-pointer" htmlFor="java">
                  Java
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          {/* Card */}
          <div className='flex'>
            <PopupCardData data="C++" onClick={openPopup} />
            <PopupCardData data="Java" onClick={openPopup} />
          </div>
        </div>
      )}
      {/* Image */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <img src={codingImg} alt="img" loading='lazy' className="w-[600px]" />
      </div>
      {/* Popup */}
      {isPopupOpen && <PopupCard onClose={closePopup} content={popupContent} />}
    </div>
  );
};

export default CodingPage;
