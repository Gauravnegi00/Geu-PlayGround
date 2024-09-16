import React, { useState, useEffect } from "react";

const questionData = [
  {
    question: "Indexes of Subarray Sum",
    difficulty: "Medium",
    companies: ["Amazon", "Facebook", "+5 more"],
    tags: ["array"],
  },
  {
    question: "Find Maximum Subarray Sum",
    difficulty: "Hard",
    companies: ["Microsoft", "Apple"],
    tags: ["Greedy"],
  },
  {
    question: "Print Hello World",
    difficulty: "Easy",
    companies: ["JP Morgan"],
    tags: ["basic"],
  },
  {
    question: "Merge Two Sorted Lists",
    difficulty: "Medium",
    companies: ["Google", "Amazon", "+10 more"],
    tags: ["sorting"],
  },
  {
    question: "Binary Tree to DLL",
    difficulty: "Hard",
    companies: ["JP Morgan", "Accolite"],
    tags: ["data structure"],
  },
];

function DsaPage() {
  const [time, setTime] = useState(86400); // 24 hours in seconds

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="height width rounded-md centerDiv flex justify-between items-start p-10 overflow-x-auto">
      {/* Left Side (Questions) */}
      <div className="w-[55%]">
        <div className="h-10 w-[110%] bg-blue-text flex justify-center items-center gap-10 p-3 mb-4 rounded-lg font-semibold">
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
            <div className="flex flex-col justify-between">
              <h3 className="font-bold">
                {index + 1}. {question.question}
              </h3>
              <div className="flex gap-4 text-green-700">
                {question.companies.map((company, idx) => (
                  <h4 key={idx}>{company}</h4>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <h5 className="font-semibold">{question.difficulty}</h5>
                  <div className="flex gap-2 text-green-700">
                    {question.tags.map((tag, idx) => (
                      <h3 key={idx}>{tag}</h3>
                    ))}
                  </div>
                </div>
                <button className="bg-light-blue text-blue-text font-semibold py-1 px-4 rounded-lg shadow-md hover:bg-blue-text hover:text-white transition duration-300">
                  Solve
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side (Problem of the Day) */}
      <div className="w[45%] flex flex-col gap-5">
        <div
          className="bg-slate-200 p-6 rounded-xl shadow-lg"
          style={{ height: "240px", width: "400px" }}
        >
          <p className="bg-green-600 text-white py-2 px-3 rounded-md text-center mb-3 mt-[-10px]">
            Problem of the Day
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">{questionData[4].question}</h2>
            <div className="flex gap-4 text-green-600">
              {questionData[4].companies.map((company, idx) => (
                <h4 key={idx}>{company}</h4>
              ))}
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

        {/* Session Section */}
        <div
          className="bg-slate-200 rounded-xl shadow-lg flex p-4"
          style={{ height: "180px", width: "400px" }}
        >
          <div className="flex-1 flex items-center p-5">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-lg font-semibold">Session</h3>
              <div className="w-24 h-24 bg-cyan-300 rounded-full flex flex-col items-center justify-center">
                <h3 className="text-white font-bold">ALL</h3>
                <h3 className="text-white font-bold">130/3292</h3>
              </div>
            </div>
          </div>

          {/* Difficulty Section */}
          <div className="flex-1 flex flex-col justify-center items-start gap-3 font-semibold">
            <div className="flex gap-5">
              <h3 className="text-blue-600">Easy</h3>
              <h3>12/20</h3>
            </div>
            <div className="flex gap-5">
              <h3 className="text-pink-600">Medium</h3>
              <h3>12/20</h3>
            </div>
            <div className="flex gap-5">
              <h3 className="text-sky-600">Hard</h3>
              <h3>12/20</h3>
            </div>
          </div>
        </div>

        {/* Revise Your Solved Section */}
        <div
          className="bg-slate-200 p-6 rounded-xl shadow-lg"
          style={{ height: "200px", width: "400px" }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg mt-[-10px]">Revise your Solved</h2>
            <div className="flex gap-4 text-green-600">
              {questionData[4].companies.map((company, idx) => (
                <h4 key={idx}>{company}</h4>
              ))}
            </div>
            <h4 className="text-green-600">+5 More</h4>

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
