import React from "react";
import HeatMap from "./HeatMap"
import PerformanceText from "./PerformanceText"
import {

  Box,
} from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PerformancecChart() {
  const data = [
    { name: "0Hr", ROAS: 24000, ACOS: 2400, CR: 2400, AOV: 3000 },
    { name: "2Hr", ROAS: 3000, ACOS: 1398, CR: 2210, AOV: 2000 },
    { name: "4Hr", ROAS: 2000, ACOS: 9800, CR: 2290, AOV: 4000 },
    { name: "6Hr", ROAS: 2780, ACOS: 3908, CR: 2000, AOV: 2000 },
    { name: "8Hr", ROAS: 1890, ACOS: 4800, CR: 2181, AOV: 2500 },
    { name: "10Hr", ROAS: 2390, ACOS: 3800, CR: 2500, AOV: 3000 },
    { name: "12Hr", ROAS: 3490, ACOS: 4300, CR: 2100, AOV: 3100 },
  ];

  const generateYAxisTicks = () => {
    const maxValue = Math.max(...data.map(d => Math.max(d.ROAS, d.ACOS, d.CR, d.AOV)));
    const ticks = [];
    for (let i = 0; i <= maxValue; i += 4000) {
      ticks.push(i);
    }
    return ticks;
  };

  const formatYAxisTick = (value) => {
    return `₹${(value / 1000).toFixed(1)}k`;
  };

  return (
    <Box>
      <PerformanceText/>
      <Box width="100%" height={400}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis tickFormatter={formatYAxisTick} ticks={generateYAxisTicks()} />
            <Tooltip formatter={(value) => [`₹${(value / 1000).toFixed(1)}k`]}
            contentStyle={{border:"1px solid rgba(235, 231, 231, 1)", width:"200px", height:"150px"}}/>
            <Line type="monotone" dataKey="ROAS" stroke="rgba(186, 101, 156, 1)"  strokeWidth={3}/>
            <Line type="monotone" dataKey="ACOS" stroke="rgba(221, 119, 3, 1)"  strokeWidth={3}/>
            <Line type="monotone" dataKey="CR" stroke="rgba(46, 140, 184, 1)f" strokeWidth={3} />
            <Line type="monotone" dataKey="AOV" stroke="rgba(88, 112, 33, 1)"  strokeWidth={3}/>
          </LineChart>
        </ResponsiveContainer>
      </Box>
      <HeatMap/>
    </Box>
  );
}

export default PerformancecChart;
