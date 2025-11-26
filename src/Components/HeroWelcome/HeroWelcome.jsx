import React from "react";
import "animate.css";
const HeroWelcome = () => {
  return (
    <div>
      
      <div className="text-center py-10 px-5 max-w-3xl mx-auto">
        <h2 className="animate__animated animate__pulse text-4xl font-extrabold bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent">
          Welcome to WarmPaws 🐾
        </h2>
        <p className="mt-3 text-lg font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          A cozy winter care platform designed to keep your pets warm, safe, and
          happy during the cold season. Explore tips, services, and adorable
          winter outfits for your furry friends.
        </p>
      </div>
      ;
    </div>
  );
};

export default HeroWelcome;
