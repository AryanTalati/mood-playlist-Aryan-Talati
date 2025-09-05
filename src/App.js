import React, {useState} from "react";
import MoodSelector from "./components/MoodSelector"
import Playlist from "./components/Playlist"
import ExampleCard from "./components/ExampleCard";

const App=()=>{
     const [mood,setMood]=useState("")

     

     const fetchPlaylists = async () => {
    try {
      // Replace localhost:3000 with your lambda endpoint
      const response = await fetch(`/.netlify/functions/spotify?moods=happy,sad`);
      const data = await response.json();
      console.log("Playlists:", data); // This shows in Inspect Console
    } catch (err) {
      console.error("Error fetching playlists:", err);
    }
  };

  // STEP 3: Trigger it on button or mood select
  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    fetchPlaylists(); // calls your Lambda
  };

return (
 <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="max-w-lg w-max h-50px bg-gradient-to-r from-blue-200 to-pink-300 rounded-full shadow-lg p-20 transition duration-300 ease-in-out">
         <h1 className="text-4xl font-bold text-blue-900 mb-6 transition-all duration-800 ease-in-out">
                  🎵 Mood Playlist Generator

         </h1>
         <MoodSelector onMoodSelect={handleMoodSelect} />
          {mood ? <Playlist mood={mood} /> : <p className="text-gray-600">Select a mood to see your playlist!</p>}
      </div>

      </div> 
       
  

);
}

export default App;
