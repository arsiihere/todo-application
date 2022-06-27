import React from "react";
import { Box } from "@mui/material";
import Chart from "react-apexcharts";

function Dasboard() {
  const options = {
    plotOptions: {
      pie: {
        donut: {
          size: 80,
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {},
          },
        },
      },
    },
  };
  const series = [44, 55];

  return (
    <Box>
      <Box>
        <Box>
          <Chart options={options} series={series} type="donut" width="500" />
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default Dasboard;
