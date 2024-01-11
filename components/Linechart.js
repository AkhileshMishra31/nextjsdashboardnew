import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "july"],
  datasets: [
    {
      label: "this year",
      data: [10000, 12000, 13000, 15000, 18000, 20000, 30000],
      fill: false,
      borderColor: "rgb(0,0,0)",
      tension: 0.5,
    },
    {
      label: "last year",
      data: [5000, 8000, 12000, 15000, 10000, 20000, 20000],
      fill: false,
      borderColor: "rgb(0,0,0)",
      borderDash: [5, 5],
      tension: 0.5,
    },
  ],
};

const Linechart = () => {
  const options = {
    maintainAspectRatio: false,
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
        beginAtZero: true, // start the y-axis from zero
        grid: {
          drawBorder: false, // hide y-axis lines
          display: false, // hide y-axis grid lines
        },
        ticks: {
          maxTicksLimit: 5, // set the maximum number of ticks
          display: true, // display y-axis ticks
          callback: function (value, index, values) {
            return value >= 1000 || value == 0 ? value / 1000 + "k" : value;
          },
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: 20,
      },
    },
  };
  return (
    <div className="h-[200px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default Linechart;
