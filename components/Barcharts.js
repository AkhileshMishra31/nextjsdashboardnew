import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Barcharts = () => {
  const data = {
    labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
    datasets: [
      {
        backgroundColor: [
          "rgba(153, 102, 255, 0.7)", // Purple
          "rgba(144, 238, 144, 0.7)", // Light Green
          "rgba(0, 0, 0, 0.7)", // Black
          "rgba(135, 206, 250, 0.7)", // Sky Blue
          "rgba(0, 0, 139, 0.7)", // Dark Blue
          "rgba(0, 128, 0, 0.7)", // Other (Light Gray)
        ],
        borderColor: "rgba(255, 255, 255, 1)", // White border
        borderWidth: 1,
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        hoverBorderColor: "rgba(255, 255, 255, 1)",
        borderRadius: 10, // Rounded corners
        borderRadiusBottom:10,
        data: [15000, 10000, 20000, 30000, 25000, 12000],
      },
    ],
  };
  const options = {
    indexAxis: "x", // Display bars horizontally
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          maxTicksLimit: 5, // set the maximum number of ticks
          display: true, // display y-axis ticks
          callback: function (value, index, values) {
            return value >= 1000 || value === 0 ? value / 1000 + "k" : value;
          },
        },
        border: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };
  return (
    <div className="p-[20px]">
      <h2 className="font-bold">Traffic by Device</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Barcharts;
