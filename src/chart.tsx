import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import type { numOpportunitiesBarChartProps } from './types/chartTypes';

export function OpportunitiesBarChart(props: numOpportunitiesBarChartProps) {
    const data = [
        //{ name: 'Jan', opportunities: 400, pv: 240 },
    ];

    for (let i = 0; i < props.dataPoints.length; i++) {
        data.push(props.dataPoints[i])
    }

    console.log(JSON.stringify(data))

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="type" />
            <YAxis dataKey="numberOfOpportunities" />
            <Tooltip />
            <Legend />
            <Bar type="monotone" dataKey="numberOfOpportunities" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}
