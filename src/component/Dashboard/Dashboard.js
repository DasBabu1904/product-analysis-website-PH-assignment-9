import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';
import './Dashboard.css'

const Dashboard = () => {

    const [data, setData] = useChartData();

    const [ChartData, setChartData] = useState([])
    useEffect(() => {
        const tempData = [];
        if (data.length > 0) {
            data.forEach(x => {
                tempData.push(x)
            });
        }
        setChartData(tempData)
    }, [data])

    console.log(ChartData)

    const stylePie = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    }
    return (
        <div>
            <h1>This is dashboard</h1>
            <div className='Display-in-a-row'>
                <LineChart
                    width={800}
                    height={500}
                    data={ChartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                </LineChart>
                {console.log("Crossed")}

                <BarChart width={800} height={500} data={data}>
                    <Bar dataKey="investment" fill="#8884d8" />
                </BarChart>
            </div>
            <div className='Display-in-a-row'>
                <AreaChart
                    width={800}
                    height={500}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>

                <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={ChartData}>
                    <RadialBar
                        minAngle={15}
                        label={{ position: 'insideStart', fill: '#fff' }}
                        background
                        clockWise
                        dataKey="sell"
                    />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={stylePie} />
                </RadialBarChart>
            </div>
        </div>
    );
};

export default Dashboard;


