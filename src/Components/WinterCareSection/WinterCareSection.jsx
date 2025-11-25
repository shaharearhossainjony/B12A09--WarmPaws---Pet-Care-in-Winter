import React, { useEffect, useState } from "react";
import WinterTipsCard from "../WinterTipsCard/WinterTipsCard";
import Loader from "../Loader/Loader";

const WinterCareSection = () => {
  const [winterTips, setWinterTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./WinterTips.json")
      .then((result) => result.json())
      .then((data) => {
        setWinterTips(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="my-5 text-center">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent">
        Winter Care Section
      </h2>

      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
          {winterTips.map((winterTip, id) => (
            <WinterTipsCard key={id} winterTip={winterTip} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinterCareSection;
