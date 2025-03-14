import React from "react";

function OnlineEvents() {
  return (
    <div className="h-auto grid place-content-center px-6 sm:pt-16 max-w-[90%] mx-auto">
      <p className="text-xl sm:text-3xl md:text-4xl font-bold text-center leading-snug glitch">
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text animate-pulse">Limited events offer</span> <br />
        <span className="text-pink-500">online</span> <br />
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text animate-pulse">
          attendance, allowing remote participants to join seamlessly.
        </span>
      </p>
    </div>
  );
}

export default OnlineEvents;
