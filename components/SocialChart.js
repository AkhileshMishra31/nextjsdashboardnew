import React from "react";

const SocialChart = () => {
  const data = [
    { website: "Google", traffic: "----" },
    { website: "Youtube", traffic: "----" },
    { website: "instgram", traffic: "--" },
    { website: "pinterest", traffic: "--" },
    { website: "facebook", traffic: "--" },
    { website: "Twitter", traffic: "--" },
    
    // Add more data as needed
  ];
  return (
    <div className="p-[20px]">
      <h2 className="font-bold">Traffic by Website</h2>
      <div className="flex flex-col">
        {data.map((item, index) => (
          <div key={index} className="flex p-3">
            <p>{item.website}</p>
            <p>{item.traffic}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialChart;
