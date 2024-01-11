// MyDoughnutChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { GoDotFill } from "react-icons/go";

ChartJS.register(ArcElement, Tooltip, Legend);

const MyDoughnutChart = () => {
  const data = {
    labels: ["United States", "Canada", "Mexico", "Others"],
    datasets: [
      {
        data: [38.6, 22.5, 30.8, 8.1], // Replace with your actual percentage data
        backgroundColor: [
          "rgba(0, 0, 0, 0.7)",     // Black for United States
          "rgba(0, 128, 0, 0.7)",   // Green for Canada
          "rgba(0, 0, 255, 0.7)",   // Blue for Mexico
          "rgba(135, 206, 250, 0.7)", // Sky Blue for Others
        ],
        borderColor: "rgba(255, 255, 255, 1)", // White border
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%", // Adjust the cutout percentage as needed for the doughnut hole
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    layout: {
      padding: {
        left: 20,
        top: 40,
      },
    },
  };

  const countriesData = [
    { country: "United States", percentage: "36.8%", color: "rgba(0, 0, 0, 0.7)" },
    { country: "Canada", percentage: "22.5%", color: "rgba(0, 128, 0, 0.7)" },
    { country: "Mexico", percentage: "30.8%", color: "rgba(0, 0, 255, 0.7)" },
    { country: "Others", percentage: " 8.1%", color: "rgba(135, 206, 250, 0.7)" },
    // Add other countries as needed
  ];

  const chartSize = 300; // Set your desired width and height

  return (
    <>
      <div className="p-[20px]">
        <h2 className="font-bold">Traffic by Device</h2>
        <div className="flex justify-center items-center">
          <div className="w-[50%]">
            <Doughnut data={data} options={options} />
          </div>
          <div className="w-[50%] flex flex-col items-center justify-between">
            {countriesData.map(({ country, percentage, color }, index) => (
              <div key={index} className="flex justify-between w-[70%]">
                <div className="flex justify-center items-center">
                  <GoDotFill style={{ color: color }} />
                  <p>{country}</p>
                </div>
                <div>
                  <span>{percentage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDoughnutChart;
