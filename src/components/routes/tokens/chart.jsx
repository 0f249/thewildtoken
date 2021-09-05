import React from "react";
// import { Doughnut, Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

const options = {
  labels: ["Public sell", "Donation", "Project development", "Team"],
  datasets: [
    {
      label: "% of tokens",
      data: [50, 10, 20, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        //,'rgba(54, 162, 235, 0.5)'
        //,'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        //,'rgba(54, 162, 235, 1)'
        //,'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    },
  ],
  options: {
    responsive: true,
    layout: {
      padding: {
        left: 0,
      },
    },
  },
};

const Chart = () => {
  return (
    <React.Fragment>
      <Doughnut
        data={options}
        options={{
          title: {
            display: false,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />

      {/* <Pie
        data={options}
        options={{
          title: {
            display: false,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      /> */}
    </React.Fragment>
  );
};

export default Chart;
