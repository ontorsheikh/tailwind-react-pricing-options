import React, { use } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle
} from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data || marksDataRes; 

  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };

    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.average = parseFloat(avg.toFixed(2));

    return student;
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={marksChartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3"  />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        
        <Bar
          dataKey="physics"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="chemistry"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
        <Bar
          dataKey="math"
          fill="#ffc658"
          activeBar={<Rectangle fill="orange" stroke="red" />}
        />
        <Bar
          dataKey="average"
          fill="#ff8042"
          activeBar={<Rectangle fill="lightgreen" stroke="darkgreen" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MarksChart;
