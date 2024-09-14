import React from "react";

import group1 from "./Assests/group1.png";
function HomePage() {

  return (
    <div className="width height  centerDiv  rounded-xl flex justify-between">
      {/* main    */}
      <div className="w-full h-full relative flex flex-col  ">
        {/* HEading */}
        <div className="w-[700px] p-10 h-[400px]    ">
          <h1 className="h-1/2 w-full text-[40px]    font-semibold ">
            From Bugs to Breakthroughs<span className="font-bold text-blue-text"> Your Coding </span>
            Adventure Begins
             Now!
          </h1>
        </div>

        {/* Cards */}
        <div className=" w-[100%] h-[500px] flex flex-col p-8 ">
          <div
            id="scrollContainer"
            className="h-[350px] w-[80%] flex-wrap overflow-x-scroll  flex-col   m-auto   flex items-center justify-center gap-5 "
          >
            {/* <div className="glass-card">a</div>
            <div className="glass-card">b</div>
            <div className="glass-card">c</div>
            <div className="glass-card">d</div>
            <div className="glass-card">e</div>
            <div className="glass-card">f</div> */}
            {data.map((d, index) => (
        <div key={index} className="glass-card p-4 ">
          <p className="text-xl font-semibold text-black">{d.Name}</p>
          <ul className="mt-2 list-disc pl-5 text-black">
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
              className="bg-gray-200 px-4 py-2 rounded-full"
            >
              ←
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("scrollContainer")
                  .scrollBy({ left: 250, behavior: "smooth" })
              }
              className="bg-gray-200 px-4 py-2 rounded-full"
            >
              →
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      
        <img src={group1} alt="hello" className="w-[250px] absolute top-[80px] right-[195px] " />
      
    </div>
  );
}

const data = [
  {
    Name: "DSA",
    Data: [
      "Organizes data and solves problems efficiently.",
      "Includes arrays, lists, stacks, and queues.",
      "Essential for designing scalable software solutions.",
    ],
  },
  {
    Name: "Web Development",
    Data: [
      "Creates and maintains websites and web apps.",
      "Covers front-end technologies (HTML, CSS, JavaScript).",
      "Involves back-end server-side languages and databases.",
    ],
  },
  {
    Name: "Web Development",
    Data: [
      "Creates and maintains websites and web apps.",
      "Covers front-end technologies (HTML, CSS, JavaScript).",
      "Involves back-end server-side languages and databases.",
    ],
  },
  {
    Name: "Web Development",
    Data: [
      "Creates and maintains websites and web apps.",
      "Covers front-end technologies (HTML, CSS, JavaScript).",
      "Involves back-end server-side languages and databases.",
    ],
  },
  {
    Name: "Web Development",
    Data: [
      "Creates and maintains websites and web apps.",
      "Covers front-end technologies (HTML, CSS, JavaScript).",
      "Involves back-end server-side languages and databases.",
    ],
  }
];


export default HomePage;