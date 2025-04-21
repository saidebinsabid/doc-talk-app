import React from "react";
import { useLocation } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const BookingChart = ({ data }) => {
  const location = useLocation();
  const chartData = data.map((doctor) => ({
    name: doctor.name,
    consultation_fee: doctor.consultation_fee,
  }));

  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      {data?.length > 0 && (
        <ResponsiveContainer width="100%" height={300} key={location.key}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="consultation_fee"
              shape={(props) => {
                const { fill, x, y, width, height } = props;
                return (
                  <path
                    d={`M${x},${y + height}C${x + width / 3},${y + height} ${
                      x + width / 2
                    },${y + height / 3}
                      ${x + width / 2},${y}
                      C${x + width / 2},${y + height / 3} ${
                      x + (2 * width) / 3
                    },${y + height} ${x + width},${y + height}
                      Z`}
                    fill={fill}
                  />
                );
              }}
            >
              <LabelList dataKey="consultation_fee" position="top" />
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default BookingChart;
