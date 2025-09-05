import React from "react"

const MoodSelector = ({ onMoodSelect }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-4 text-gray-700">Select your mood:</h2>
    <div className="flex justify-center gap-4 flex-wrap">
      {["happy", "sad", "energetic", "chill"].map((mood) => (
        <button
          key={mood}
          onClick={() => onMoodSelect(mood.toLowerCase())}
          className="px-4 py-2 rounded-lg bg-indigo-500 text-white 
             hover:bg-indigo-600 hover:scale-105 shadow hover:shadow-lg 
             transition-all duration-300 ease-in-out"
        >
          {mood}
        </button>
      ))}
    </div>
  </div>
)

export default MoodSelector
