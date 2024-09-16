import React, { useState, useEffect } from "react";

const questionData = [
  {
    question: "Indexes of Subarray Sum",
    companies: ["Amazon", "Facebook", "+5more"],
    difficulty: "Medium",
    attempts: "1M",
    successRate: "29.55%",
  },
  {
    question: "Find Maximum Subarray Sum",
    companies: ["Google", "Microsoft", "+3more"],
    difficulty: "Hard",
    attempts: "500K",
    successRate: "20.55%",
  },
  {
    question: "Kth Largest Element",
    companies: ["Netflix", "Apple", "+4more"],
    difficulty: "Easy",
    attempts: "750K",
    successRate: "40.12%",
  },
  {
    question: "Binary Search in Rotated Array",
    companies: ["Uber", "Amazon", "+2more"],
    difficulty: "Hard",
    attempts: "1.2M",
    successRate: "18.45%",
  },
  {
    question: "Merge Intervals",
    companies: ["Twitter", "Tesla", "+6more"],
    difficulty: "Medium",
    attempts: "900K",
    successRate: "33.80%",
  },
  {
    question: "Reverse Linked List",
    companies: ["Snapchat", "Pinterest", "+7more"],
    difficulty: "Easy",
    attempts: "2M",
    successRate: "45.15%",
  },
];

function DsaPage() {
  // Initialize countdown timer for 24 hours (86400 seconds)
  const [time, setTime] = useState(86400);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  // Convert time to hours, minutes, and seconds
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="height width centerDiv flex justify-between items-start p-10 overflow-x-auto">
      {/* Left Side (Questions) */}
      <div className="w-[55%]">
        <div className="h-10 w-[110%] bg-slate-600 flex gap-10 p-3 mb-4 rounded-lg font-semibold">
          <h3 className="w-[10%] text-white">S.No</h3>
          <h3 className="w-[60%] text-white">Title</h3>
          <h3 className="w-[30%] text-white">Difficulty</h3>
        </div>
        {questionData.map((question, index) => (
          <div
            key={index}
            className="bg-white p-6 mb-4 rounded-lg shadow-lg flex justify-between items-center"
            style={{ height: "100px", width: "110%" }}
          >
            {/* Serial Number, Question, and Companies */}
            <div className="flex flex-col justify-between">
              <h3 className="font-bold">
                {index + 1}. {question.question}
              </h3>
              <div className="flex gap-3 mt-1">
                {question.companies.map((company, idx) => (
                  <h5 key={idx} className="text-green-600">
                    {company}
                  </h5>
                ))}
              </div>
            </div>

            {/* Solve button and Stats */}
            <div className="flex flex-col justify-between items-end">
              <div className="flex gap-8">
                <h5 className="font-semibold">{question.difficulty}</h5>
                <button className="bg-green-600 text-white py-1 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                  Solve
                </button>
              </div>
              <div className="flex gap-5 text-gray-500 mt-2">
                <h5>{question.attempts}</h5>
                <h5>{question.successRate}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side (Problem of the Day) */}
      <div className="w[45%] flex flex-col gap-5 mt-[55px] ">
        <div
          className="bg-slate-200 p-6 rounded-xl shadow-lg"
          style={{ height: "280px", width: "400px" }}
        >
          <p className="bg-green-600 text-white py-2 px-4 rounded-md text-center mb-4">
            Problem of the Day
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">Binary Tree to DLL</h2>
            <div className="flex gap-4 text-green-600">
              <h4>JP Morgan</h4>
              <h4>Accolite</h4>
            </div>
            <h4 className="text-green-600">+5 More</h4>

            {/* Countdown Timer */}
            <div className="flex gap-6 items-center">
              <h4 className="font-bold">
                {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </h4>
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                Solve Problem
              </button>
            </div>
          </div>
        </div>
        <div
          className="bg-slate-200 p-6 rounded-xl shadow-lg"
          style={{ height: "280px", width: "400px" }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">Revise your Solved</h2>
            <div className="flex gap-4 text-green-600">
              <h4>JP Morgan</h4>
              <h4>Accolite</h4>
            </div>
            <h4 className="text-green-600">+5 More</h4>

            {/* Countdown Timer */}
            <div className="flex gap-6 items-center">
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                Solve Problem
              </button>
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DsaPage;
