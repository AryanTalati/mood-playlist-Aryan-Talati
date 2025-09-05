import React from "react"

const Playlist = ({ mood }) => {
  const playlists = {
    happy: ["Happy - Pharrell Williams", "Walking on Sunshine - Katrina & The Waves", "Good Vibes - Chris Janson","Bags-Clairo"],
    sad: ["Someone Like You - Adele", "Fix You - Coldplay", "Let Her Go - Passenger"],
    energetic: ["Eye of the Tiger - Survivor", "Can't Stop - Red Hot Chili Peppers", "Stronger - Kanye West"],
    chill: ["Sunflower - Post Malone", "Weightless - Marconi Union", "Come Away With Me - Norah Jones"]
  }

  return (
    <div className="mt-6"> 
      <h2 className="text-lg font-semibold text-gray-700 capitalize">{mood} Playlist:</h2>
      <ul className=" list-disc pl-5 mt-3 text-black-600 rounded  transition-all duration-500 ease-in-out ">
        {playlists[mood]?.map((song, idx) => (
          <li key={idx}>{song}</li>
        ))}
      </ul>
    </div>
  )
}

export default Playlist
