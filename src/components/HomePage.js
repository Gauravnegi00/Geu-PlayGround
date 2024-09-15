import React from "react";
import group1 from "./Assests/group1.png";
function HomePage() {
  return (
    <div className="width height  centerDiv  rounded-xl flex justify-between">
      {/* main    */}
      <div className="w-full h-full relative flex flex-col  ">
        {/* HEading */}
        <div className="w-[700px] p-10 h-[400px]    items-center justify-center ">
          <h1 className="h-1/2 w-full text-[40px]    font-semibold ">
            From Bugs to Breakthroughs<span className="font-bold text-blue-text"> Your Coding </span>
            Adventure Begins
             Now!
          </h1>
        </div>

        {/* Cards */}
        <div className="w-[100%]  h-[350px] flex flex-col p-1">
          <div
            id="scrollContainer"
            className="h-[350px] w-[87%] flex-wrap overflow-x-scroll flex-col m-auto p-1 flex items-center justify-center z-10 gap-5 scrollbar-hidden"
          >
            {data.map((d, index) => (
              <div key={index} className="glass-card p-4 relative">
                <p className="text-xl text-blue-text  font-bold  absolute top-5 ">{d.Name}</p>
                <ul className="mt-4 list-disc pl-5 text-black">
                  {d.Data.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex m-auto gap-10 mt-4">
            <button
              onClick={() =>
                document
                  .getElementById("scrollContainer")
                  .scrollBy({ left: -250, behavior: "smooth" })
              }
              className="bg-blue-text text-white font-extrabold px-4 py-2 rounded-full hover:scale-110"
            >
              ←
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("scrollContainer")
                  .scrollBy({ left: 250, behavior: "smooth" })
              } 
              className="bg-blue-text text-white px-4 py-2 rounded-full hover:scale-110 "
            >
              →
            </button>
          </div>
        </div>

      </div>
      {/* Image */}
      
        <img src={group1} alt="hello" className="w-[250px] absolute top-[65px] right-[195px] " />
      
    </div>
  );
}

const data = [
  {
    Name: "Coding",
    Data: [
      "Beginner-friendly and accessible to all skill levels.",
      "Step-by-step learning with a structured approach.",
      "Covers basic to advanced data structures and algorithms.",
    ],
  },
  {
    Name: "DSA",
    Data: [
      "150 questions for a solid foundation.",
      "Easy, medium, and hard categories.",
      "Enhances problem-solving skills.",
    ],
  },
  {
    Name: "Web Development",
    Data: [
      "Learn HTML, CSS, and JavaScript basics.",
      "Master React.js, Next.js, and more.",
      "Build real-world projects.",
    ],
  },
  {
    Name: "Theory",
    Data: [
      "Important subjects for placements.",
      "Includes OS, DBMS, and Networks.",
      "PDF notes and MCQ-based prep.",
    ],
  },
  {
    Name: "Compiler",
    Data: [
      "Built-in compiler for programming languages like C++ and Java.",
      "Separate compiler for web use with live server.",
      "Lightweight and fast.",
    ],
  },
  {
    Name: "Contest",
    Data: [
      "Well-structured contests for placement preparation.",
      "Create your own contests for friendly matches.",
      "Mock placement contests to simulate real exams.",
    ],
  },
];



export default HomePage;